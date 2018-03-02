import React, { Component } from 'react'
// import styles from './mapHover.scss'

class MapHover extends Component {
  render () {
    return (
      <div ref={(div) => { this.svgContainer = div }} />
    )
  }
}

export default MapHover
