import api from '../helpers/api'
import {createAction} from 'redux-actions'
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {API_CHARACTERS} from '../config/constants/api'
import {CHARACTERS_PER_PAGE} from '../config/constants'

export const CHARACTERS_ARE_LOADING = 'CHARACTERS_ARE_LOADING'
export const charactersAreLoading = createAction(CHARACTERS_ARE_LOADING)
export const CHARACTERS_LOADED = 'CHARACTERS_LOADED'
export const charactersLoaded = createAction(CHARACTERS_LOADED)
export const CHARACTERS_LOADING_ERROR = 'CHARACTERS_LOADING_ERROR'
export const charactersLoadingError = createAction(CHARACTERS_LOADING_ERROR)

export function getCharacters(params = {}) {
  return (dispatch, getState) => {
    const {characters} = getState()
    if (!characters.areLoading) {
      params = {...params, limit: CHARACTERS_PER_PAGE}
      dispatch(showLoading())
      dispatch(charactersAreLoading(params))
      api
        .get(API_CHARACTERS, {params})
        .then(response => {
          dispatch(hideLoading())
          dispatch(charactersLoaded(response.data.data))
        })
        .catch((error) => {
          dispatch(hideLoading())
          dispatch(charactersLoadingError(error))
        })
    }
  }
}