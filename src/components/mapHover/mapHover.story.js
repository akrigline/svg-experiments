import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import MapHover from './mapHover'

storiesOf('Map with Hover Symbols', module)
  .add('renders', () => (
    <MapHover />
  ))
