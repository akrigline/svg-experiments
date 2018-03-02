---
to: src/components/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.js
---

import React, { Component } from 'react'
import styles from './<%= h.inflection.camelize(name, true) %>.scss'

class <%= h.inflection.camelize(name) %> extends Component {
  render () {
    return (
      <div className={styles.<%= h.inflection.camelize(name, true) %>Wrapper}>
        Your Shiny New Component!
      </div>
    )
  }
}

export default <%= h.inflection.camelize(name) %>
