import api from '../helpers/api'
import {createAction} from 'redux-actions'
import {API_CHARACTERS} from '../config/constants/api'

export const CHARACTERS_ARE_LOADING = 'CHARACTERS_ARE_LOADING'
export const charactersAreLoading = createAction(CHARACTERS_ARE_LOADING)
export const CHARACTERS_LOADED = 'CHARACTERS_LOADED'
export const charactersLoaded = createAction(CHARACTERS_LOADED)
export const CHARACTERS_LOADING_ERROR = 'CHARACTERS_LOADING_ERROR'
export const charactersLoadingError = createAction(CHARACTERS_LOADING_ERROR)

export function getCharacters(params = {}) {
  return (dispatch, getState) => {
    const {characters} = getState()
    params = {...params, limit: 10}
    if (!characters.areLoading) {
      dispatch(charactersAreLoading())
      api
        .get(API_CHARACTERS, {params})
        .then(response => dispatch(charactersLoaded(response.data.data)))
        .catch((error) => dispatch(charactersLoadingError()))
    }
  }
}