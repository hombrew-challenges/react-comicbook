import {createStore, applyMiddleware} from 'redux'

// middlewares
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/index'

export default function (initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunk,
    ReduxPromise
  )(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}