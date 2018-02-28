import React, { Component } from 'react'
import Logo from '../../assets/icons/logo.svg'
import styles from './app.scss'

class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <Logo className={styles.appLogo} />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
