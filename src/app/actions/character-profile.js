import axios from 'axios'
import api from '../helpers/api'
import {createAction} from 'redux-actions'

// actions
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {push} from 'react-router-redux'

// constants 
import {COMICS_PER_PAGE} from '../config/constants'
import {API_CHARACTER_PROFILE, API_CHARACTER_COMICS} from '../config/constants/api'
import {CHARACTER_PROFILE} from '../config/constants/routes'

export const CHARACTER_PROFILE_IS_LOADING = 'CHARACTER_PROFILE_IS_LOADING'
export const characterProfileIsLoading = createAction(CHARACTER_PROFILE_IS_LOADING)
export const CHARACTER_PROFILE_LOADED = 'CHARACTER_PROFILE_LOADED'
export const characterProfileLoaded = createAction(CHARACTER_PROFILE_LOADED)
export const CHARACTER_PROFILE_LOADING_ERROR = 'CHARACTER_PROFILE_LOADING_ERROR'
export const characterProfileLoadingError = createAction(CHARACTER_PROFILE_LOADING_ERROR)

export function getCharacterProfile(id) {
  return (dispatch, getState) => {
    const {characterProfile} = getState()
    if (characterProfile.data && characterProfile.data.results[0].id === id) {
      return dispatch(push(CHARACTER_PROFILE(id)))
    }
    if (!characterProfile.isLoading) {
      const params = {limit: COMICS_PER_PAGE}
      dispatch(showLoading())
      dispatch(characterProfileIsLoading())
      axios
        .all([
          api.get(API_CHARACTER_PROFILE(id)),
          api.get(API_CHARACTER_COMICS(id), {params})
        ])
        .then(axios.spread((profile, comics) => {
          dispatch(characterProfileLoaded({profile: profile.data.data, comics: comics.data.data}))
          dispatch(hideLoading())
          dispatch(push(CHARACTER_PROFILE(id)))
        }))
        .catch((error) => {
          dispatch(characterProfileLoadingError(error))
          dispatch(hideLoading())
        })
    }
  }
}

export function getCharacterComics(id, params = {}) {
  return (dispatch, getState) => {
    const {characterProfile} = getState()
    if (!characterProfile.isLoading) {
      params = {...params, limit: COMICS_PER_PAGE}
      dispatch(showLoading())
      dispatch(characterProfileIsLoading())
      api
        .get(API_CHARACTER_COMICS(id), {params})
        .then(comics => {
          dispatch(characterProfileLoaded({comics: comics.data.data}))
          dispatch(hideLoading())
        })
        .catch(error => {
          dispatch(characterProfileLoadingError(error))
          dispatch(hideLoading())
        })
    }
  }
}