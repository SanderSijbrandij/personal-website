import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import fetchPages from '../../shared/actions/pages/fetch'
import setCurrentPage from '../../shared/actions/pages/set-current'

import Page from './Page'

class Pages extends PureComponent {
  componentWillMount() {
    this.props.fetchPages()
  }

  changePage(page) {
    this.props.setCurrentPage(this.props.pages, page)
  }

  renderPageLink(page) {
    const classes = (page.link == this.props.currentPage.link)
                    ? 'panel-block is-active'
                    : 'panel-block'
    return(
      <a onClick={this.changePage.bind(this, page.link)} key={page.link} className={classes}>
        {page.title}
      </a>
    )
  }

  render() {
    const { link, title, content } = this.props.currentPage

    return (
      <section className='section'>
        <div className='columns'>
          <div className='column is-one-quarter'>
            <nav className="panel">
              <div className='panel-heading'>
              Pages
              </div>
              {this.props.pages.map(this.renderPageLink.bind(this))}
              <a className="panel-block" onClick={this.changePage.bind(this, null)}>
                Add a new Page
              </a>
            </nav>
          </div>

          <div className='column'>
            <Page />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({pages, currentPage}) => ({pages, currentPage})
export default connect(mapStateToProps, { fetchPages, setCurrentPage })(Pages)
