import { handleActions } from 'redux-actions'
import {
  CHARACTERS_ARE_LOADING,
  CHARACTERS_LOADED,
  CHARACTERS_LOADING_ERROR
} from '../actions/characters'

let initialState = {areCached: false, areLoading: false, data: {}}

let actionMap = {}

actionMap[CHARACTERS_ARE_LOADING] = state => ({...state, areLoading: true})
actionMap[CHARACTERS_LOADED] = (state, action) => ({...state, areCached: true, areLoading: false, data: action.payload})
actionMap[CHARACTERS_LOADING_ERROR] = state => ({...state, areLoading: false})

export default handleActions(actionMap, initialState)