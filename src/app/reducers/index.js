import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {loadingBarReducer} from 'react-redux-loading-bar'
import characters from './characters'
import characterProfile from './character-profile'

const rootReducer = combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  characters,
  characterProfile
})

export default rootReducer