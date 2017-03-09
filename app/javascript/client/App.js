import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Banner from './components/Banner'
import Navigation from './components/Navigation'
import Content from './components/Content'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className='content'>
          <Banner />
          <Navigation />
          <Content />
        </div>
      </Provider>
    )
  }
}

export default App
