import React, { Component } from 'react'
import styles from './keyboardAnimation.scss'
import Keyboard from '../../assets/svgs/keyboard_layout.svg'

class KeyboardAnimated extends Component {
  componentDidMount () {
    // This gets the SVG Viewbox and then the midpoint
    const viewBox = this.svgContainer.getElementsByTagName('svg')[0].viewBox.baseVal
    const midX = viewBox.width / 2
    const midY = viewBox.height / 2

    const paths = this.svgContainer.getElementsByTagName('path')
    const baseDelay = 600
    let animationDelay = baseDelay
    for (let path of paths) {
      path.style.animationDuration = `${baseDelay / 2}ms`
      path.style.transitionDuration = `${baseDelay / 2}ms`

      path.setAttribute('stroke-dasharray', path.getTotalLength())
      path.setAttribute('stroke-dashoffset', path.getTotalLength())

      // this will calculate the percentage needed to transform the path to have it centered in the viewbox
      const pathBBox = path.getBBox()
      const xPercent = ((midX - pathBBox.width / 2) - pathBBox.x) / viewBox.width * 100
      const yPercent = ((midY - pathBBox.height / 2) - pathBBox.y) / viewBox.height * 100
      path.style.transform = `translate(${xPercent}%, ${yPercent}%)`

      path.style.animationDelay = `${animationDelay}ms`

      setTimeout(() => {
        path.style.transform = `translate(0, 0)`
      }, animationDelay + baseDelay / 2)

      setTimeout(() => {
        path.style.fillOpacity = 1
        path.style.strokeOpacity = 0
      }, animationDelay + baseDelay)
      animationDelay = animationDelay + baseDelay
    }
  }

  render () {
    return (
      <div ref={(div) => { this.svgContainer = div }}>
        <Keyboard className={styles.keyboard} />
      </div>
    )
  }
}

export default KeyboardAnimated
