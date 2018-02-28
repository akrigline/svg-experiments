import React, { Component } from 'react'
import styles from './chinaStrokeAnimation.scss'
import ChinaMap from '../../assets/svgs/chinaHigh.svg'
import ChinaMapOptimized from '../../assets/svgs/chinaHigh-optimized.svg'

class ChinaAnimated extends Component {
  componentDidMount () {
    const paths = this.chinaContainer.getElementsByTagName('path')
    let animationDelay = this.props.animationDelay
    // getElementsByTagName doesn't return an array, it returns an HTMLCollection, so we can't use .map or .forEach
    for (let path of paths) {
      // Set our Stroke Dash array and dash offset per the length of the line for each line (this is how it draws itself)
      path.setAttribute('stroke-dasharray', path.getTotalLength())
      path.setAttribute('stroke-dashoffset', path.getTotalLength())
      // Set the Animation Delay as expected before we increment it
      path.style.animationDelay = this.props.animationDelay && `${animationDelay}ms`
      // Set the Animation duration and transition duration from props
      path.style.animationDuration = `${this.props.animationDuration}ms`
      path.style.transitionDuration = `${this.props.transitionDuration}ms`
      // Incrememnt the animation delay
      animationDelay = animationDelay + this.props.animationDelay
      // Set a timeout to coincide with when the line will be finished drawing to do other stuff to that path.
      this.props.transitionDuration > 0 && setTimeout(() => {
        path.style.fillOpacity = 1
        path.style.strokeWidth = 1
      }, animationDelay + this.props.animationDuration)
    }
    // Set a timeout to coincide with when all the lines will be finished drawing to do some other stuff!
    const animationCompleteTime = paths.length * this.props.animationDelay + this.props.animationDuration + this.props.transitionDuration
    if (animationCompleteTime > 0) {
      setTimeout(() => {
        console.log('finished')
        this.props.animationComplete()
      }, animationCompleteTime)
    }
  }
  render () {
    return (
      <div ref={(div) => { this.chinaContainer = div }}>
        {this.props.optimized
          ? <ChinaMapOptimized className={styles.chinaMap} />
          : <ChinaMap className={styles.chinaMap} />}
      </div>
    )
  }
}

ChinaAnimated.defaultProps = {
  animationDelay: 0,
  transitionDuration: 0,
  animationDuration: 0
}

export default ChinaAnimated
