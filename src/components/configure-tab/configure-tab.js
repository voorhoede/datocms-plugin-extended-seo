import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './configure-tab.css'

export default function ConfigureTab({ values, onChange }) {
  const [titleField, setTitleField] = useState(values?.title)
  const [descriptionField, setDescriptionField] = useState(values?.description)

  function onTitleChange(e) {
    setTitleField(e.target.value)
    onChange('title', e.target.value)
  }

  function onDescriptionChange(e) {
    setDescriptionField(e.target.value)
    onChange('description', e.target.value)
  }

  return (
    <section>
      <label className="configure-tab__label" htmlFor="title">
        Title
      </label>
      <input
        className="configure-tab__input"
        id="title"
        type="text"
        placeholder="Title"
        defaultValue={titleField}
        onChange={onTitleChange}
      />

      <label className="configure-tab__label" htmlFor="description">
        Description
      </label>
      <input
        className="configure-tab__input"
        id="description"
        type="text"
        placeholder="Description"
        defaultValue={descriptionField}
        onChange={onDescriptionChange}
      />
    </section>
  )
}

ConfigureTab.propTypes = {
  values: PropTypes.instanceOf(Object),
  onChange: PropTypes.func.isRequired
}
