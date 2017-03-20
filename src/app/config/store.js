import {createStore, applyMiddleware} from 'redux'

// middlewares
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

// router history
import {browserHistory} from 'react-router'

export default function (initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunk,
    routerMiddleware(browserHistory)
  )(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}