import React from 'react'
import {Route, IndexRoute} from 'react-router'

// routes
import * as routes from './constants/routes'

// components
import App from '../pages/Layout'

// views
import Main from '../pages/Main'

export default (
  <Route path={routes.ROOT} component={App}>
    <IndexRoute component={Main}/>
  </Route>
)