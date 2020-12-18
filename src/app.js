import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from './components/tabs/tabs'
import useDato from './lib/useDato'
import { socials } from './lib/constants'
import { buildPreviewURL } from './lib/helpers'

export default function App({ plugin }) {
  const { getImageUrl } = useDato(plugin.parameters.global.datoApiToken)
  const fieldPath = plugin.fieldPath
  const fieldValue = plugin.getFieldValue(fieldPath)
  const [fieldObject, setFieldObject] = useState(fieldValue)

  const canEdit = plugin.parameters.instance.canEdit

  const fieldNames = {
    titleField: plugin.parameters.instance.defaultTitleField,
    descriptionField: plugin.parameters.instance.defaultDescriptionField,
    imageField: plugin.parameters.instance.defaultImageField,
  }

  const socialImageObject = plugin.getFieldValue(fieldNames.imageField)
  const [socialTitle, setSocialTitle] = useState(
    plugin.getFieldValue(fieldNames.titleField)
  )
  const [socialDescription, setSocialDescription] = useState(
    plugin.getFieldValue(fieldNames.descriptionField)
  )
  const [socialImage, setSocialImage] = useState('')

  async function fetchImage() {
    if (!socialImage) {
      const imageUrl = await getImageUrl(socialImageObject)
      setSocialImage(imageUrl)
    }
  }

  fetchImage()

  Object.keys(plugin.fields).forEach((field) => {
    const fieldName = plugin.fields[field].attributes.api_key

    if (
      fieldName === fieldNames.titleField ||
      fieldName === fieldNames.descriptionField ||
      fieldName === fieldNames.imageField
    ) {
      plugin.addFieldChangeListener(fieldName, newValue =>
        changeSocialText(fieldName, newValue)
      )
    }
  })

  async function changeSocialText(fieldName, newValue) {
    switch (fieldName) {
      case fieldNames.titleField: {
        setSocialTitle(newValue)
        break
      }
      case fieldNames.descriptionField: {
        setSocialDescription(newValue)
        break
      }
      case fieldNames.imageField: {
        setSocialImage(await getImageUrl(newValue))
        break
      }
    }
  }

  function configureChange(changedField, newValue) {
    setFieldObject(oldValue => {
      const newObj = { ...oldValue, [changedField]: newValue }
      plugin.setFieldValue(fieldPath, newObj)
      return newObj
    })
  }

  const socialTabs = Object.entries(socials).map(([title, slug]) => (
    <div key={slug} label={title}>
      <iframe
        className="social-preview-card"
        title={title}
        src={buildPreviewURL(slug, {
          title: fieldObject?.title || socialTitle,
          description: fieldObject?.description || socialDescription,
          image: socialImage,
        })}
      />
    </div>
  ))

  return (
    <main className="container">
      <Tabs
        fieldNames={fieldNames}
        fieldValue={fieldObject}
        onConfigureChange={configureChange}
        canConfigure={canEdit}
      >
        {socialTabs}
      </Tabs>
    </main>
  )
}

App.propTypes = {
  plugin: PropTypes.object.isRequired,
}
