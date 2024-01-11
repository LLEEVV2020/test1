import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import { rootReducer } from './reducers'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
