import React from 'react'
import ReactDOM from 'react-dom'
import ChinaAnimated from './chinaStrokeAnimation'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ChinaAnimated />, div)
  ReactDOM.unmountComponentAtNode(div)
})
