import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'
import characters from './characters'

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  characters
})

export default rootReducer