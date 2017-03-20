import { handleActions } from 'redux-actions'
import {
  CHARACTERS_ARE_LOADING,
  CHARACTERS_LOADED,
  CHARACTERS_LOADING_ERROR,
  CHARACTERS_FILTER
} from '../actions/characters'

let initialState = {areCached: false, areLoading: false, data: {}, filters: {word: ''}}

let actionMap = {}

actionMap[CHARACTERS_ARE_LOADING] = (state, action) => ({...state, areLoading: true})
actionMap[CHARACTERS_LOADED] = (state, action) => ({...state, areCached: true, areLoading: false, data: action.payload})
actionMap[CHARACTERS_LOADING_ERROR] = state => ({...state, areLoading: false})
actionMap[CHARACTERS_FILTER] = (state, action) => ({...state, filters: {[action.payload.filter]: action.payload.value}})

export default handleActions(actionMap, initialState)