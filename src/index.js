import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { LocaleProvider } from 'antd'
import ja_JP from 'antd/lib/locale-provider/ja_JP'

import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './containers/App'

import './styles/index.sass'

const history = createHistory()

const middleware = [thunk, routerMiddleware(history)]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={ja_JP}>
        <App />
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
