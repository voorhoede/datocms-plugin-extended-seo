import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './_global-styles/style.css'

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer()

  const container = document.createElement('main')
  render(<App plugin={plugin} />, container)
  document.body.appendChild(container)
})
