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
      position: [-3.381824, 36.705322],
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    2: {
      id: 2,
      countryId: 1,
      name: 'Radio React',
      position: [-3.908099, 31.629639],
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    3: {
      id: 3,
      countryId: 1,
      name: 'Radio Farm Radio',
      position: [-7.297088, 36.090088],
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    4: {
      id: 4,
      countryId: 2,
      name: 'Faraja FM',
      position: [-6.642783, 39.320068],
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    5: {
      id: 5,
      countryId: 3,
      name: 'Triple-A',
      position: [-10.466206, 36.485596],
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    6: {
      id: 6,
      countryId: 2,
      name: 'Radio Mario',
      position: [-7.580328, 32.640381],
      frequency: '',
      contacts: {},
      populationCoverage: 100,
    },
    7: {
      id: 7,
      countryId: 2,
      name: 'Radio Maria',
      position: [-1.515936, 32.728271],
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
