import React, { PureComponent } from 'react'

class Navigation extends PureComponent {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item is-tab is-active">About</a>
            <a className="nav-item is-tab">CV</a>
            <a className="nav-item is-tab">Projects</a>
            <a className="nav-item is-tab">Contact</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
