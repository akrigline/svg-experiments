import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import KeyboardAnimated from './keyboardAnimation'

storiesOf('Keyboard', module)
  .add('renders', () => (
    <KeyboardAnimated />
  ))
