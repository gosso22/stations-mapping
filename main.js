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
  countries: [
    {
      name: 'Tanzania',
    },
    {
      name: 'Ghana',
    },
    {
      name: 'Uganda',
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
