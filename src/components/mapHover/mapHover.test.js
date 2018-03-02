import React from 'react'
import ReactDOM from 'react-dom'
import MapHover from './mapHover'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MapHover />, div)
  ReactDOM.unmountComponentAtNode(div)
})
