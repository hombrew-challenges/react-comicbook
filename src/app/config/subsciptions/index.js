// subscriber
import observeStore from './observeStore'

// initial states
import {initialState as favouritesInitialState} from '../../reducers/favourites'

// subscriptions
import favouritesChange from './favourites-chage'

export default (store) => {
  observeStore(
    store,
    favouritesInitialState.data,
    state => state.favourites.data,
    favouritesChange
  )
}
