// actions
import {push} from 'react-router-redux'

export function goTo(path) {
  return (dispatch) => {
    dispatch(push(path))
  }
}