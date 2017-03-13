import React from 'react'
import {Route, IndexRedirect} from 'react-router'

// routes
import * as routes from './constants/routes'

// components
import Layout from '../pages/Layout'

// views
import Characters from '../pages/Characters'

export default (
  <Route path={routes.ROOT} component={Layout}>
    <IndexRedirect to={routes.CHARACTERS}/>
    <Route path={routes.CHARACTERS} component={Characters}/>
  </Route>
)