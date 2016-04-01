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
  countries: [
    {
      id: 1,
      name: 'Tanzania',
      stations: [1, 2, 3, 4],
    },
    {
      id: 2,
      name: 'Ghana',
      stations: [5, 6],
    },
    {
      id: 3,
      name: 'Uganda',
      stations: [7],
    },
  ]
}

store.dispatch(init(data))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
