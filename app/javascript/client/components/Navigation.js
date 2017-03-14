import React, { PureComponent, PropTypes } from 'react'

class Navigation extends PureComponent {
  static get propTypes() {
    return {
      pages: PropTypes.array.isRequired,
      currentPage: PropTypes.object.isRequired,
      changePage: PropTypes.func.isRequired,
    }
  }

  renderTab(page) {
    if (!!this.props.currentPage) {
      const { currentPage, changePage } = this.props
      const classes = (currentPage.link == page.link) ?
                      'nav-item is-tab is-active' :
                      'nav-item is-tab'
      return <a onClick={changePage.bind(null, page.link)}
                key={page.link} id={page.link}
                className={classes}>{page.title}
              </a>
    } else {
      return ( <p>Loading...</p>)
    }
  }

  render() {
    const { currentPage, pages, changePage } = this.props
    const projectClasses = (currentPage.link == 'projects') ?
                           'nav-item is-tab is-active' :
                           'nav-item is-tab'
    return (
      <nav className="nav has-shadow is-mobile">
        <div className="container">
          <div className="nav-left">
            <a onClick={changePage.bind(null, 'projects')}
               className={projectClasses}
               id="projects">
               Projects
            </a>
            { pages.map(this.renderTab.bind(this)) }
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
