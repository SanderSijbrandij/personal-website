import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchProjects from '../../shared/actions/projects/fetch'

import Title from '../../shared/components/Title'

class Projects extends PureComponent {
  componentWillMount() {
    this.props.fetchProjects()
  }

  renderProject(project) {
    return (
      <div className='column is-4'>
        <div className="card" key={project.id}>
          <div className="card-image">
            <figure className="image is-3by2">
              <img src={ project.image } alt="Image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{ project.title }</p>
                <p className="subtitle is-6">{ project.subtitle }</p>
              </div>
            </div>
            <div className="content">
              { project.description }
              <br /><br />
              <a href={ project.github } target='_blank'>Github</a>
              <a href={ project.preview } target='_blank'>Live Preview</a>
              <hr />
              {project.tags.map((tag) => {
                return (
                <span key={tag.id} className='tag is-primary'>
                  { tag.text }
                </span>
              )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <Title text='Projects' level='1' size='3' type='title' />
          <hr />
          <div className='columns is-multiline'>
            { this.props.projects.map(this.renderProject.bind(this)) }
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({projects}) => ({projects})
export default connect(mapStateToProps, { fetchProjects })(Projects)
