import { handleActions } from 'redux-actions'
import {
  CHARACTER_PROFILE_IS_LOADING,
  CHARACTER_PROFILE_LOADED,
  CHARACTER_PROFILE_LOADING_ERROR
} from '../actions/character-profile'

let initialState = {isCached: false, isLoading: false, params: {}, data: null, comics: {}, filters: {word: ''}}

let actionMap = {}

actionMap[CHARACTER_PROFILE_IS_LOADING] = (state, action) => ({...state, params: action.payload, isLoading: true})
actionMap[CHARACTER_PROFILE_LOADED] = (state, action) => {
  let newState = {...state, isCached: true, isLoading: false}
  if (action.payload.profile) newState.data = action.payload.profile
  if (action.payload.comics) newState.comics = action.payload.comics
  return newState
}
actionMap[CHARACTER_PROFILE_LOADING_ERROR] = state => ({...state, isLoading: false})

export default handleActions(actionMap, initialState)