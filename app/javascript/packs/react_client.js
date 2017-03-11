// Run this example by adding <%= javascript_pack_tag 'react_client' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../client/store'
import App from '../client/App'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.body.appendChild(document.createElement('div')))
})
