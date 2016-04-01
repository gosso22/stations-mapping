import { combineReducers } from 'redux'

function stations(state = {}, action) {
  switch (action.type) {
    case 'INIT':
      return action.data.stations
    default:
      return state
  }
}

function countries(state = [], action) {
  switch (action.type) {
    case 'INIT':
      return action.data.countries
    case 'ADD_COUNTRY':
      return [...state, action.country]
    default:
      return state
  }
}

const initialUserSelection = {
  country: {name: 'NO COUNTRY SELECTED'}
}

function userSelection(state = initialUserSelection, action) {
  switch (action.type) {
    case 'SELECT_COUNTRY':
      return {
        ...state,
        country: { name: action.id },
      }
    default:
      return state
  }
}

export default combineReducers({
  countries,
  stations,
  userSelection,
})
