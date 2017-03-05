import React, { PureComponent } from 'react'
import Banner from './components/shared/Banner'

class App extends PureComponent {
  render() {
    return (
      <div className='content'>
        <Banner />
      </div>
    )
  }
}

export default App
