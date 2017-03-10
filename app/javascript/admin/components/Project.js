import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Title from '../../shared/components/Title'

class Project extends PureComponent {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      hasChanged: false,
      newTitleValue: null,
      newSubtitleValue: null,
      newDescriptionValue: null,
      newImageValue: null,
      newGithubValue: null,
      newPreviewValue: null,
      newTagsValue: null
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentProject !== newProps.currentProject) {
      this.setState({
        isEditing: false,
        hasChanged: false,
        newTitleValue: null,
        newSubtitleValue: null,
        newDescriptionValue: null,
        newImageValue: null,
        newGithubValue: null,
        newPreviewValue: null,
        newTagsValue: null
      })
      // TODO: also add instant editor somehow. maybe id = 0?
    }
  }

  toggleEditing() {
    const {
      isEditing,
      hasChanged,
      newTitleValue,
      newSubtitleValue,
      newDescriptionValue,
      newImageValue,
      newGithubValue,
      newPreviewValue,
      newTagsValue } = this.state

    const {
      title,
      subtitle,
      description,
      image,
      github,
      preview,
      tags } = this.props.currentProject

    const changed = (
      (
        newTitleValue !== title || newSubtitleValue !== subtitle ||
        newDescriptionValue !== description || newImageValue !== image ||
        newGithubValue !== github || newPreviewValue !== preview ||
        newTagsValue !== tags
      )
      &&
      (
        newTitleValue !== null || newSubtitleValue !== null ||
        newDescriptionValue !== null || newImageValue !== null ||
        newGithubValue !== null || newPreviewValue !== null ||
        newTagsValue !== null
      )
    )

    this.setState({ isEditing: !isEditing })
    this.setState({ hasChanged: changed })
  }

  renderForm() {
    const {
      title,
      subtitle,
      description,
      image,
      github,
      preview,
      tags } = this.props.currentProject

    const {
      isEditing,
      hasChanged,
      newTitleValue,
      newSubtitleValue,
      newDescriptionValue,
      newImageValue,
      newGithubValue,
      newPreviewValue,
      newTagsValue } = this.state

    return (
      <div className='card-content'>
        <p className='control'>
          <label className='label' htmlFor='title'>Title</label>
          <input className='input' type='text' ref='title'
            defaultValue={newTitleValue || title} placeholder='Title'
            onChange={null} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='subtitle'>Subtitle</label>
          <input className='input' type='text' ref='subtitle'
            defaultValue={newSubtitleValue || subtitle} placeholder='Subtitle'
            onChange={null} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='description'>Description</label>
          <textarea className='textarea small-textarea' ref='description'
            defaultValue={newDescriptionValue || description}
            placeholder='Description'
            onChange={null} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='image'>Image Url</label>
          <input className='input' type='text' ref='image'
            defaultValue={newImageValue || image} placeholder='Image Url'
            onChange={null} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='github'>Github Repo</label>
          <input className='input' type='text' ref='github'
            defaultValue={newGithubValue || github} placeholder='Github Repo'
            onChange={null} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='preview'>Preview/Live Url</label>
          <input className='input' type='text' ref='preview'
            defaultValue={newPreviewValue || preview} placeholder='Preview/Live Url'
            onChange={null} />
        </p>
      </div>
    )
  }

  renderText() {
    const { hasChanged, isEditing } = this.state
    const project = this.props.currentProject
    return (
      <div className='column is-8 is-offset-2'>
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
          <a href={ project.github } target='_blank'>Github</a><br />
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
    )
  }

  render() {
    const { hasChanged, isEditing } = this.state
    const renderMethod = (isEditing) ? this.renderForm : this.renderText

    return (
      <div className="card">
        { renderMethod.bind(this)() }
        <footer className="card-footer">
          { !hasChanged &&
            <a className="card-footer-item is-disabled">No changes...</a>
          }
          { hasChanged &&
            <a className="card-footer-item"
               onClick={null}>Save changes</a>
          }
          <a className="card-footer-item" onClick={this.toggleEditing.bind(this)}>
            { !isEditing && 'Edit' }
            { isEditing && 'Preview' }
          </a>
          <a className="card-footer-item" onClick={null}>Delete</a>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({currentProject}) => ({currentProject})
export default connect(mapStateToProps)(Project)
