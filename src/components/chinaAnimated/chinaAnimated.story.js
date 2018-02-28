import React from 'react'
import { storiesOf } from '@storybook/react'
import ChinaAnimated from './chinaAnimated'

storiesOf('ChinaAnimated', module)
  .add('unOptimized SVG', () => (
    <ChinaAnimated />
  ))
  .add('SVG Optimized with vscode', () => (
    <ChinaAnimated />
  ))
