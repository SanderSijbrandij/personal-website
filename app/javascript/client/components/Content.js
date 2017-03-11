import React, { PureComponent, PropTypes } from 'react'

import Title from '../../shared/components/Title'
import Projects from './Projects'

class Content extends PureComponent {
  static get propTypes() {
    return {
      currentPage: PropTypes.object.isRequired,
      projects: PropTypes.array.isRequired,
    }
  }

  render() {
    const { currentPage, projects } = this.props
    if (currentPage.link === 'projects') {
      return <Projects projects={projects} />
    } else {
      return (
        <section className='section'>
          <div className='container'>
          { !currentPage && 'Loading content...' }
          { !!currentPage && <Title text={currentPage.title || 'Loading...'} level='1' size='3' type='title' /> }
          <hr />
          { !!currentPage && <div dangerouslySetInnerHTML={{__html: currentPage.content }}></div>}
          </div>
        </section>
      )
    }
  }
}

export default Content
