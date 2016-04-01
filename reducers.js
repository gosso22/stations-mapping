import { combineReducers } from 'redux'

const initialStations = {
  all: {},
  visible: [],
}

function stations(state = initialStations, action) {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        all: action.data.stations,
      }
    case 'SELECT_COUNTRY':
      return {
        ...state,
        visible: Object.keys(state.all)
          .map(key => state.all[key])
          .filter(station => station.countryId == action.id)
      }
    default:
      return state
  }
}

const initialCountries = {
  all: {},
  list: [],
  selected: null,
}

function countries(state = initialCountries, action) {
  switch (action.type) {
    case 'INIT':
      const { countries } = action.data
      return {
        ...state,
        all: countries,
        list: Object.keys(countries).map(key => countries[key])
      }
    case 'SELECT_COUNTRY':
      return {
        ...state,
        selected: state.all[action.id],
      }
    default:
      return state
  }
}

export default combineReducers({
  countries,
  stations,
})
