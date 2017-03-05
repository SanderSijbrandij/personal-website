// Run this example by adding <%= javascript_pack_tag 'react_client' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from '../client/store'
import { Router, Route, IndexRoute } from 'react-router'
import {browserHistory} from 'react-router';

import App from '../client/App.js'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')))
})
