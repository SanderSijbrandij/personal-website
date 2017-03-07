import React, { PureComponent } from 'react'

import Title from '../../shared/components/Title'

export default class Navigation extends PureComponent {
  render() {
    return(
      <nav className="nav has-shadow">
        <div className="nav-left">
          <span className='nav-item'>
            <Title text='Admin Panel' level='p' size='4' type='title' />
          </span>
        </div>

        <div className="nav-right nav-menu">
          <span className="nav-item">
            <a href='/' target='_blank' className="button is-primary">
              <span>View website</span>
            </a>
          </span>
        </div>
      </nav>
    )
  }
}
