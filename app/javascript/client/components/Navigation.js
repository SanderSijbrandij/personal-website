import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import setCurrentPage from '../../shared/actions/pages/set-current'

class Navigation extends PureComponent {
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
                key={page.link}
                className={classes}>{page.title}
              </a>
    } else {
      return ( <p>Loading...</p>)
    }
  }

  render() {
    return (
      <nav className="nav has-shadow is-mobile">
        <div className="container">
          <div className="nav-left">
            { this.props.pages.map(this.renderTab.bind(this)) }
            <a onClick={this.changePage.bind(this, 'projects')}
               className='nav-item is-tab'>
               Projects
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({pages, currentPage}) => ({pages, currentPage})
export default connect(mapStateToProps, { setCurrentPage })(Navigation)
