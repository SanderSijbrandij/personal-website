import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from '../shared/reducers'

import pageService from '../shared/middleware/api.js'

const baseHistory = browserHistory
const routingMiddleware = routerMiddleware(baseHistory)
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(routingMiddleware),
  applyMiddleware(ReduxThunk),
  applyMiddleware(pageService),
  devTools
)

const store = createStore(reducer, enhancer)

export const history = syncHistoryWithStore(baseHistory, store)

export default store
