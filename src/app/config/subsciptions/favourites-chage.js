import {toastr} from 'react-redux-toastr'
import _ from 'lodash'

export default function(store, prevState, currentState) {
  if (currentState.length > prevState.length) {
    const added = _.differenceWith(currentState, prevState, _.isEqual)[0]
    toastr.success(added.title, 'Was added sucessfully')
  } else if (currentState.length < prevState.length) {
    const removed = _.differenceWith(prevState, currentState, _.isEqual)[0]
    toastr.error(removed.title, 'Was removed sucessfully')
  }
  // currentState.length > prevState.length
  //     ? toastr.success('Added Comic', 'sucessfully')
  //     : toastr.error('Removed Comic', 'sucessfully')
}
