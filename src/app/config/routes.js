import React from 'react'
import {Route, IndexRedirect} from 'react-router'

// routes
import * as routes from './constants/routes'

// views
import Layout from '../pages/layout'
import Characters from '../pages/characters'
import CharacterProfile from '../pages/character-profile'

export default (
  <Route path={routes.ROOT} component={Layout}>
    <IndexRedirect to={routes.CHARACTERS}/>
    <Route path={routes.CHARACTERS} component={Characters}/>
    <Route path={routes.CHARACTER_PROFILE()} component={CharacterProfile}/>
  </Route>
)