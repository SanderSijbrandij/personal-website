import React, { PureComponent } from 'react'
import Title from './Title'

class Banner extends PureComponent {
  render() {
    return(
      <section className="hero is-primary is-fullheight is-bold">

        <div className='hero-head'>
          navigation here.
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <Title text='Sander Sijbrandij' type='title' level='1' />
            <Title text='Junior Web Developer' type='subtitle' level='3' />
          </div>
        </div>

        <div className='hero-foot'>
          something here.
        </div>
      </section>
    )
  }
}

export default Banner
