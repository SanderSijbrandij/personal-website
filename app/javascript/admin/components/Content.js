import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import fetchPages from '../../shared/actions/pages/fetch'
import setCurrentPage from '../../shared/actions/pages/set-current'
import fetchProjects from '../../shared/actions/projects/fetch'
import setCurrentProject from '../actions/projects/set-current'

import Page from './Page'
import Project from './Project'

class Content extends PureComponent {
  componentWillMount() {
    this.props.fetchPages()
    this.props.fetchProjects()
  }

  changePage(page) {
    this.props.setCurrentProject(this.props.projects, null)
    this.props.setCurrentPage(this.props.pages, page)
  }

  changeProject(project) {
    this.props.setCurrentPage(this.props.pages, 'projects')
    this.props.setCurrentProject(this.props.projects, project)
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

  renderProjectLink(project) {
    const classes = (project.id == this.props.currentProject.id)
                    ? 'panel-block is-active'
                    : 'panel-block'
    return(
      <a onClick={this.changeProject.bind(this, project.id)} key={project.id} className={classes}>
        {project.title}
      </a>
    )
  }

  render() {
    const { link } = this.props.currentPage
    const { id } = this.props.currentProject

    const newPageClasses = (id === null && link === null)
                            ? 'panel-block is-active'
                            : 'panel-block'

    const newProjectClasses = (id === null && link === 'projects')
                              ? 'panel-block is-active'
                              : 'panel-block'

    return (
      <section className='section'>
        <div className='columns'>
          <div className='column is-one-quarter'>
            <nav className="panel">
              <div className='panel-heading'>Pages</div>
              { this.props.pages.map(this.renderPageLink.bind(this)) }
              <a className={newPageClasses} onClick={this.changePage.bind(this, null)}>
                Add a new Page
              </a>
              <div className='panel-heading'>Projects</div>
              { this.props.projects.map(this.renderProjectLink.bind(this)) }
              <a className={newProjectClasses} onClick={this.changeProject.bind(this, null)}>
                Add a new Project
              </a>
            </nav>
          </div>
          <div className='column'>
            { link !== 'projects' && <Page /> }
            { !!id && <Project /> }
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({pages, currentPage, projects, currentProject}) => ({
  pages, currentPage, projects, currentProject
})
const mapDispatchToProps = {
  fetchPages,
  setCurrentPage,
  fetchProjects,
  setCurrentProject
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)
