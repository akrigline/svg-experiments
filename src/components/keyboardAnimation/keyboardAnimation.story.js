import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import KeyboardAnimated from './keyboardAnimation'

storiesOf('Keyboard', module)
  .add('renders', () => (
    <KeyboardAnimated
      animationDelay={75}
      animationDuration={3000}
      transitionDuration={300}
      animationComplete={action('animation complete')} />
  ))
