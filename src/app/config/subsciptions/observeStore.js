import _ from 'lodash'

export default function(store, initState, select, onChange, onStart = false) {
  let currentState = initState

  function handleChange() {
    let nextState = select(store.getState())
    if (!_.isEqual(nextState, currentState)) {
      let prevState = _.cloneDeep(currentState)
      currentState = nextState
      onChange(store, prevState, currentState)
    }
  }

  let unsubscribe = store.subscribe(handleChange)
  if (onStart) {
    handleChange()
  }
  return unsubscribe
}
