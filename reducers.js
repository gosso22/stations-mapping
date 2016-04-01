import { combineReducers } from 'redux'

const initialStationsState = [
  {
    name: 'Radio 5',
    location: {
      longitude: 0,
      latitude: 0,
    },
    frequency: '',
    contacts: {},
    populationCoverage: 100,
  },
  {
    name: 'Radio React',
    location: {
      longitude: 0,
      latitude: 0,
    },
    frequency: '',
    contacts: {},
    populationCoverage: 100,
  },
  {
    name: 'Radio Farm Radio',
    location: {
      longitude: 0,
      latitude: 0,
    },
    frequency: '',
    contacts: {},
    populationCoverage: 100,
  },
  {
    name: 'Faraja FM',
    location: {
      longitude: 0,
      latitude: 0,
    },
    frequency: '',
    contacts: {},
    populationCoverage: 100,
  },
  {
    name: 'Triple-A',
    location: {
      longitude: 0,
      latitude: 0,
    },
    frequency: '',
    contacts: {},
    populationCoverage: 100,
  },
  {
    name: 'Radio Mario',
    location: {
      longitude: 0,
      latitude: 0,
    },
    frequency: '',
    contacts: {},
    populationCoverage: 100,
  },
  {
    name: 'Radio Maria',
    location: {
      longitude: 0,
      latitude: 0,
    },
    frequency: '',
    contacts: {},
    populationCoverage: 100,
  },
]

function stations(state = initialStationsState, action) {
  switch (action.type) {
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

export default combineReducers({
  stations,
  countries,
})
