import React from 'react'
import PropTypes from 'prop-types'
import './tab-list-item.css'

export default function TabListItem({ activeTab, label, onClick }) {
  return (
    <li
      className={`tab-list-item${
        activeTab === label ? ' tab-list-item--active' : ''
      }`.trim()}
      role="tab"
    >
      <button type="button" onClick={() => onClick(label)}>
        {label}
      </button>
    </li>
  )
}

TabListItem.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
