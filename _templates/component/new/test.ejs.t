---
to: src/components/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.test.js
---

import React from 'react'
import ReactDOM from 'react-dom'
import <%= h.inflection.camelize(name) %> from './<%= h.inflection.camelize(name, true) %>'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<<%= h.inflection.camelize(name) %> />, div)
  ReactDOM.unmountComponentAtNode(div)
})
