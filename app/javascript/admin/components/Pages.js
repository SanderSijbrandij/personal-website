import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import fetchPages from '../actions/pages/fetch'

import Page from './Page'

class Pages extends PureComponent {
  componentWillMount() {
    this.props.fetchPages()
  }

  renderPageLink(page) {
    return(
      <a key={page.link} className="panel-block">
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
              {this.props.pages.map(this.renderPageLink)}
            </nav>
          </div>

          <div className='column'>
            <Page link={link} title={title} content={content} />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({pages, currentPage}) => ({pages, currentPage})
export default connect(mapStateToProps, { fetchPages })(Pages)
