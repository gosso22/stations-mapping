import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const stationsData = {
  stations: [
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
  ],
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)
