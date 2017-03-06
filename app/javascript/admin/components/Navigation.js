import React, { PureComponent } from 'react'

export default class Navigation extends PureComponent {
  render() {
    return(
      <nav className="nav has-shadow">
        <div className="nav-left">
          <span className='nav-item'>
            <p className='title is-4'>Admin Panel</p>
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
