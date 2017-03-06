import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import fetchPages from '../../actions/pages/fetch'
import getCurrentPage from '../../actions/pages/set-current'

import Title from './Title'

class Content extends PureComponent {
  componentWillMount() {
    this.props.fetchPages()
  }

  render() {
    const { currentPage } = this.props
    return (
      <section className='section'>
        <div className='container'>
        { !currentPage && 'Loading content...' }
        { !!currentPage && <Title text={currentPage.title} level='1' size='3' type='title' /> }
        { !!currentPage && currentPage.content}
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({pages, currentPage}) => ({pages, currentPage})
export default connect(mapStateToProps, { fetchPages, getCurrentPage })(Content)
