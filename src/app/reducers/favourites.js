import { handleActions } from 'redux-actions'
import {
  FAVOURITES_ADD,
  FAVOURITES_REMOVE,
} from '../actions/favourites'

const keyword = 'cb-favourites'
const favourites = localStorage.getItem(keyword)
const data = favourites ? JSON.parse(favourites) : []

let initialState = {data, filters: {word: ''}}

let actionMap = {}

actionMap[FAVOURITES_ADD] = (state, action) => {
  const alreadyAdded = state.data.some((favourite) => favourite.id === action.payload.id)
  if (alreadyAdded) return state
  const data = [...state.data, action.payload]
  localStorage.setItem(keyword, JSON.stringify(data))
  return {...state, data}
}
actionMap[FAVOURITES_REMOVE] = (state, action) => {
  const data = state.data.filter((favourite) => favourite.id !== action.payload)
  localStorage.setItem(keyword, JSON.stringify(data))
  return {...state, data}
}

export default handleActions(actionMap, initialState)