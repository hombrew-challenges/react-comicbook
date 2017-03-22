import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar'
import {reducer as toastr} from 'react-redux-toastr'
import characters from './characters'
import characterProfile from './character-profile'
import favourites from './favourites'

const rootReducer = combineReducers({
  routing,
  loadingBar,
  toastr,
  characters,
  characterProfile,
  favourites
})

export default rootReducer