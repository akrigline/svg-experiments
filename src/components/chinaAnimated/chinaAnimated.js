import React, { Component } from 'react'
import styles from './chinaAnimated.scss'
import ChinaMap from '../../assets/svgs/chinaHigh.svg'

class ChinaAnimated extends Component {
  render () {
    return (
      <div>
        <ChinaMap className={styles.chinaMap} />
      </div>
    )
  }
}

export default ChinaAnimated
