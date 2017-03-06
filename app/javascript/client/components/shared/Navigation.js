import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { history } from '../../store'

class Navigation extends PureComponent {
  setCurrentPage(e) {
    e.preventDefault()

    const location = `/${this}`
    history.push(location)
  }

  renderTab(page) {
    if (!!this.props.currentPage) {
      const { currentPage } = this.props
      const classes = (currentPage.link == page.link) ? 'nav-item is-tab is-active' : 'nav-item is-tab'
      return (
        <a onClick={this.setCurrentPage.bind(page.link)} key={page.link} className={classes}>{page.title}</a>
      )
    } else {
      return ( <p>Loading...</p>)
    }
  }

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            { this.props.pages.map(this.renderTab.bind(this)) }
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({pages, currentPage}) => ({pages, currentPage})
export default connect(mapStateToProps)(Navigation)
