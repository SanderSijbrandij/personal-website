import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import store, { history } from './store'

import Banner from './components/shared/Banner'
import Navigation from './components/shared/Navigation'
import Content from './components/shared/Content'
import About from './components/Content/About'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className='content'>
          <Banner />
          <Navigation />
          <Router history={history}>
            <Route path='/' component={Content}>
              <IndexRoute component={About} />
            </Route>
          </Router>
        </div>
      </Provider>
    )
  }
}


export default App
