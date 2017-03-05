import React, { PureComponent } from 'react'

class Title extends PureComponent {
  render() {
    const { text } = this.props

    return (
      <h1 className='title'>{text}</h1>
    )
  }
}

export default Title
