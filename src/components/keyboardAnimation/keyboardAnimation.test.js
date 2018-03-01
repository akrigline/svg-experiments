import React from 'react'
import ReactDOM from 'react-dom'
import KeyboardAnimated from './keyboardAnimation'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<KeyboardAnimated />, div)
  ReactDOM.unmountComponentAtNode(div)
})
