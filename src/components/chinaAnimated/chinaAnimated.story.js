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
  .add('unoptimized with animation delay of 75', () => (
    <ChinaAnimated
      animationDelay={75}
      animationDuration={300}
      transitionDuration={300} />
  ))
  .add('unoptimized with animation delay of 300', () => (
    <ChinaAnimated
      animationDelay={300}
      animationDuration={300}
      transitionDuration={300} />
  ))
