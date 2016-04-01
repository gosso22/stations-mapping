import React    from 'react'
import ReactDOM from 'react-dom'
import App      from './app'
import reducers from './reducers'

import { init }
  from './actions'
import { createStore } 
  from 'redux'
import { Provider } 
  from 'react-redux'

const store = createStore(reducers)

// Will come from data store
const data = {
  stations: {
    1: {
      id: 1,
      countryId: 1,
      name: 'Radio 5',
      location: {
        longitude: 0,
        latitude: 0,
      },
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    2: {
      id: 2,
      countryId: 1,
      name: 'Radio React',
      location: {
        longitude: 0,
        latitude: 0,
      },
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    3: {
      id: 3,
      countryId: 1,
      name: 'Radio Farm Radio',
      location: {
        longitude: 0,
        latitude: 0,
      },
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    4: {
      id: 4,
      countryId: 2,
      name: 'Faraja FM',
      location: {
        longitude: 0,
        latitude: 0,
      },
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    5: {
      id: 5,
      countryId: 3,
      name: 'Triple-A',
      location: {
        longitude: 0,
        latitude: 0,
      },
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    6: {
      id: 6,
      countryId: 2,
      name: 'Radio Mario',
      location: {
        longitude: 0,
        latitude: 0,
      },
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    7: {
      id: 7,
      countryId: 2,
      name: 'Radio Maria',
      location: {
        longitude: 0,
        latitude: 0,
      },
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
  },
  countries: {
    1: {
      id: 1,
      name: 'Tanzania',
    },
    2: {
      id: 2,
      name: 'Ghana',
    },
    3: {
      id: 3,
      name: 'Uganda',
    },
  },
}

store.dispatch(init(data))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
