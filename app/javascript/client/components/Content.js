import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import fetchPages from '../../shared/actions/pages/fetch'
import getCurrentPage from '../../shared/actions/pages/set-current'

import Title from '../../shared/components/Title'
import Projects from './Projects'


export class Content extends PureComponent {
  componentWillMount() {
    this.props.fetchPages()
  }

  render() {
    const { currentPage } = this.props
    if (currentPage.link === 'projects') {
      return <Projects />
    } else {
      return (
        <section className='section'>
          <div className='container'>
          { !currentPage && 'Loading content...' }
          { !!currentPage && <Title text={currentPage.title} level='1' size='3' type='title' /> }
          <hr />
          { !!currentPage && <div dangerouslySetInnerHTML={{__html: currentPage.content }}></div>}
          </div>
        </section>
      )
    }
  }
}

const mapStateToProps = ({pages, currentPage}) => ({pages, currentPage})
export default connect(mapStateToProps, { fetchPages, getCurrentPage })(Content)
