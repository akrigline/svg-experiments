import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.scss'
import App from './components/app/app'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
