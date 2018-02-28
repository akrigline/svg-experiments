import React, { Component } from 'react'
import styles from './chinaAnimated.scss'
import ChinaMap from '../../assets/svgs/chinaHigh.svg'
import ChinaMapOptimized from '../../assets/svgs/chinaHigh-optimized.svg'

class ChinaAnimated extends Component {
  componentDidMount () {
    const paths = this.chinaContainer.getElementsByTagName('path')
    for (let path of paths) {
      path.setAttribute('stroke-dasharray', path.getTotalLength())
      path.setAttribute('stroke-dashoffset', path.getTotalLength())
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

export default ChinaAnimated
