import {createAction} from 'redux-actions'

export const FAVOURITES_ADD = 'FAVOURITES_ADD'
export const favouritesAdd = createAction(FAVOURITES_ADD)
export const FAVOURITES_REMOVE = 'FAVOURITES_REMOVE'
export const favouritesRemove = createAction(FAVOURITES_REMOVE)

