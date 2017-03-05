import React, { PureComponent } from 'react'

class Content extends PureComponent {
  render() {
    return (
      <div className='main'>
        {this.props.children}
      </div>
    )
  }
}

export default Content
