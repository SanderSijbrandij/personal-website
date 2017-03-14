import React, { PureComponent, PropTypes } from 'react'

import Title from '../../shared/components/Title'

class Projects extends PureComponent {
  static get propTypes() {
    return {
      projects: PropTypes.array.isRequired,
    }
  }

  renderProject(project) {
    const hasgithub = (project.github !== '#')
    const haspreview = (project.preview !== '#')

    return (
      <div className='column is-4' key={project.id}>
        <div className="card">
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
              { hasgithub && <a href={ project.github } target='_blank'>Github</a> }
              <br />
              { haspreview && <a href={ project.preview } target='_blank'>Live Preview</a> }
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

export default Projects
