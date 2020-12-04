import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TabListItem from '../tab-list-item/tab-list-item'
import './tabs.css'

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  function onClickTabItem(tab) {
    setActiveTab(tab)
  }

  return (
    <section className="tabs">
      <ul className="tabs__tab-list" role="tablist">
        {children.map((child) => {
          const { label } = child.props
          return (
            <TabListItem
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          )
        })}
      </ul>
      <article className="tabs__tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </article>
    </section>
  )
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
}
