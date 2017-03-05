import React, { PureComponent } from 'react'

import Title from './components/shared/Title'

class App extends PureComponent {
  render() {
    return (
      <div className='container'>
        <Title text='hello from react' />
      </div>
    )
  }
}

export default App
