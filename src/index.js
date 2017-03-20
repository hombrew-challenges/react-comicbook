// react
import React from 'react'
import ReactDOM from 'react-dom'

// redux
import {Provider} from 'react-redux'
import configureStore from './app/config/store'

// router
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import routes from './app/config/routes'

// styles
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/index.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)
