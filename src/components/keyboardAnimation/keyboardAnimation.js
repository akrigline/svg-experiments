import React, { Component } from 'react'
import styles from './keyboardAnimation.scss'
import Keyboard from '../../assets/svgs/keyboard_layout.svg'

class KeyboardAnimated extends Component {
  // componentDidMount () {
  //   const paths = this.chinaContainer.getElementsByTagName('path')
  //   let animationDelay = this.props.animationDelay
  //   // getElementsByTagName doesn't return an array, it returns an HTMLCollection, so we can't use .map or .forEach
  //   for (let path of paths) {
  //     // Set our Stroke Dash array and dash offset per the length of the line for each line (this is how it draws itself)
  //     path.setAttribute('stroke-dasharray', path.getTotalLength())
  //     path.setAttribute('stroke-dashoffset', path.getTotalLength())
  //     // Set the Animation Delay as expected before we increment it
  //     path.style.animationDelay = this.props.animationDelay && `${animationDelay}ms`
  //     // Set the Animation duration and transition duration from props
  //     path.style.animationDuration = `${this.props.animationDuration}ms`
  //     path.style.transitionDuration = `${this.props.transitionDuration}ms`
  //     // Incrememnt the animation delay
  //     animationDelay = animationDelay + this.props.animationDelay
  //     // Set a timeout to coincide with when the line will be finished drawing to do other stuff to that path.
  //     this.props.transitionDuration > 0 && setTimeout(() => {
  //       path.style.fillOpacity = 1
  //       path.style.strokeWidth = 1
  //     }, animationDelay + this.props.animationDuration)
  //   }
  //   // Set a timeout to coincide with when all the lines will be finished drawing to do some other stuff!
  //   const animationCompleteTime = paths.length * this.props.animationDelay + this.props.animationDuration + this.props.transitionDuration
  //   if (animationCompleteTime > 0) {
  //     setTimeout(() => {
  //       console.log('finished')
  //       this.props.animationComplete()
  //     }, animationCompleteTime)
  //   }
  // }
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

KeyboardAnimated.defaultProps = {
  animationDelay: 0,
  transitionDuration: 0,
  animationDuration: 0
}

export default KeyboardAnimated
