import React, { PureComponent } from 'react'
import Banner from './components/shared/Banner'
import Navigation from './components/shared/Navigation'

class App extends PureComponent {
  render() {
    return (
      <div className='content'>
        <Banner />
        <Navigation />
      </div>
    )
  }
}

export default App
