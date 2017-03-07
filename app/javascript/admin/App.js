import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Navigation from './components/Navigation'
import Pages from './components/Pages'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className='content'>
          <Navigation />
          <Pages />
        </div>
      </Provider>
    )
  }
}


export default App
