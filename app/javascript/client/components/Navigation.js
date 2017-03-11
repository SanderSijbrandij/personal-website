import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import setCurrentPage from '../../shared/actions/pages/set-current'

export class Navigation extends PureComponent {
  static get propTypes() {
    return {
      pages: PropTypes.array.isRequired,
      currentPage: PropTypes.object.isRequired,
      setCurrentPage: PropTypes.func.isRequired,
    }
  }

  changePage(page) {
    if (page === 'projects') {
      this.props.setCurrentPage(this.props.pages, 'projects')
      return false
    }
    this.props.setCurrentPage(this.props.pages, page)
  }

  renderTab(page) {
    if (!!this.props.currentPage) {
      const { currentPage } = this.props
      const classes = (currentPage.link == page.link) ?
                      'nav-item is-tab is-active' :
                      'nav-item is-tab'
      return <a onClick={this.changePage.bind(this, page.link)}
                key={page.link} id={page.link}
                className={classes}>{page.title}
              </a>
    } else {
      return ( <p>Loading...</p>)
    }
  }

  render() {
    const { currentPage } = this.props
    const projectClasses = (currentPage.link == 'projects') ?
                           'nav-item is-tab is-active' :
                           'nav-item is-tab'
    return (
      <nav className="nav has-shadow is-mobile">
        <div className="container">
          <div className="nav-left">
            { this.props.pages.map(this.renderTab.bind(this)) }
            <a onClick={this.changePage.bind(this, 'projects')}
               className={projectClasses}
               id="projects">
               Projects
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(null, { setCurrentPage })(Navigation)
