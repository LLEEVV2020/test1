import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import { rootReducer } from './reducers'

/*function logger(store) {
  return function (next) {
    return function (action) {
      const result = next(action)
      console.log('middleware', store.getState())
      return result
    }
  }
}*/
const logger = (store) => (next) => (action) => {
  const result = next(action)
  console.log('middleware', store.getState())
  return result
}

const store = createStore(rootReducer, applyMiddleware(logger))

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
