import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TabListItem from '../tab-list-item/tab-list-item'
import IconConfigure from '../icons/icon-configure'
import ConfigureTab from '../configure-tab/configure-tab'
import './tabs.css'

export default function Tabs({
  children,
  fieldNames,
  fieldValue,
  onConfigureChange,
  canConfigure
}) {
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
        {canConfigure && (
          <li
            className={`tabs__tab-configure${
              activeTab === 'configure' ? ' tabs__tab-configure--active' : ''
            }`}
          >
            <button type="button" onClick={() => onClickTabItem('configure')}>
              <IconConfigure />
              <span>Configure</span>
            </button>
          </li>
        )}
      </ul>
      <section className="tabs__tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}

        {activeTab === 'configure' && (
          <ConfigureTab fieldNames={fieldNames} values={fieldValue} onChange={onConfigureChange}>
            Configure
          </ConfigureTab>
        )}
      </section>
    </section>
  )
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  fieldNames: PropTypes.object,
  fieldValue: PropTypes.object,
  onConfigureChange: PropTypes.func.isRequired,
  canConfigure: PropTypes.bool,
}
