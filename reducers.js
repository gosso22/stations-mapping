import { combineReducers } from 'redux'

import stations from './reducers/stations'
import countries from './reducers/countries'

export default combineReducers({
  countries,
  stations,
})
