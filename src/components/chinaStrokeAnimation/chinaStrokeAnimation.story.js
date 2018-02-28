import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ChinaAnimated from './chinaStrokeAnimation'

storiesOf('Chinese Provinces/Self-drawing stroke', module)
  .add('unoptimized SVG', () => (
    <ChinaAnimated
      animationDuration={3000}
      animationComplete={action('animation complete')} />
  ))
  .add('unoptimized SVG with transition', () => (
    <ChinaAnimated
      animationDuration={3000}
      transitionDuration={300}
      animationComplete={action('animation complete')} />
  ))
  .add('unoptimized with animation delay of 75 & a transition', () => (
    <ChinaAnimated
      animationDelay={75}
      animationDuration={3000}
      transitionDuration={300}
      animationComplete={action('animation complete')} />
  ))
  .add('unoptimized with animation delay of 300 & a transition', () => (
    <ChinaAnimated
      animationDelay={300}
      animationDuration={3000}
      transitionDuration={300}
      animationComplete={action('animation complete')} />
  ))
  .add('SVG Optimized with vscode', () => (
    <ChinaAnimated
      animationDuration={3000}
      animationComplete={action('animation complete')} />
  ))
