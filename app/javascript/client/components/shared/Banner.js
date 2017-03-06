import React, { PureComponent } from 'react'
import Title from './Title'

class Banner extends PureComponent {
  render() {
    return(
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container has-text-right">
            <Title text='Sander Sijbrandij' type='title' level='p' size='2' />
            <Title text='Junior Web Developer' type='subtitle' level='p' size='4' />
          </div>
        </div>
      </section>
    )
  }
}

export default Banner
