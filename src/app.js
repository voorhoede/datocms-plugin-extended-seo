import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from './components/tabs/tabs'
import useDato from './lib/useDato'
import { socials } from './lib/constants'
import { buildPreviewURL } from './lib/helpers'

export default function App({ plugin }) {
  const { getImageUrl } = useDato(plugin.parameters.global.datoApiToken)

  const defaultFields = plugin.parameters.instance.defaultFields
    .split(',')
    .map(field => field.trim())

  const titleField = defaultFields[0]
  const descriptionField = defaultFields[1]
  const imageField = defaultFields[2]
  const socialImageObject = plugin.getFieldValue(imageField)
  const [socialTitle, setSocialTitle] = useState(plugin.getFieldValue(titleField))
  const [socialDescription, setSocialDescription] = useState(plugin.getFieldValue(descriptionField))
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

    if (defaultFields.indexOf(fieldName) !== -1) {
      plugin.addFieldChangeListener(fieldName, newValue => changeSocialText(fieldName, newValue))
    }
  })

  async function changeSocialText(fieldName, newValue) {
    switch (fieldName) {
      case titleField: {
        setSocialTitle(newValue)
        break
      }
      case descriptionField: {
        setSocialDescription(newValue)
        break
      }
      case imageField: {
        setSocialImage(await getImageUrl(newValue))
      }
    }
  }

  const socialTabs = Object.entries(socials).map(([title, slug]) => (
    <div key={slug} label={title}>
      <iframe
        className="social-preview-card"
        title={title}
        src={buildPreviewURL(slug, { title: socialTitle, description: socialDescription, image: socialImage })}
      />
    </div>
  ))

  return (
    <div className="container">
      <Tabs>{socialTabs}</Tabs>
    </div>
  )
}

App.propTypes = {
  plugin: PropTypes.object.isRequired,
}
