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
      if (newProps.currentProject.id === null) {
        this.setState({ isEditing: true })
      }
    }
  }

  changeTitleValue() {
    const changed = (this.props.currentProject.title !== this.refs.title.value)
    this.setState({ newTitleValue: this.refs.title.value, hasChanged: changed })
  }
  changeSubtitleValue() {
    const changed = (this.props.currentProject.subtitle !== this.refs.subtitle.value)
    this.setState({ newSubtitleValue: this.refs.subtitle.value, hasChanged: changed })
  }
  changeDescriptionValue() {
    const changed = (this.props.currentProject.description !== this.refs.description.value)
    this.setState({ newDescriptionValue: this.refs.description.value, hasChanged: changed })
  }
  changeImageValue() {
    const changed = (this.props.currentProject.image !== this.refs.image.value)
    this.setState({ newImageValue: this.refs.image.value, hasChanged: changed })
  }
  changeGithubValue() {
    const changed = (this.props.currentProject.github !== this.refs.github.value)
    this.setState({ newGithubValue: this.refs.github.value, hasChanged: changed })
  }
  changePreviewValue() {
    const changed = (this.props.currentProject.preview !== this.refs.preview.value)
    this.setState({ newPreviewValue: this.refs.preview.value, hasChanged: changed })
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
            onChange={this.changeTitleValue.bind(this)} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='subtitle'>Subtitle</label>
          <input className='input' type='text' ref='subtitle'
            defaultValue={newSubtitleValue || subtitle} placeholder='Subtitle'
            onChange={this.changeSubtitleValue.bind(this)} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='description'>Description</label>
          <textarea className='textarea small-textarea' ref='description'
            defaultValue={newDescriptionValue || description}
            placeholder='Description'
            onChange={this.changeDescriptionValue.bind(this)} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='image'>Image Url</label>
          <input className='input' type='text' ref='image'
            defaultValue={newImageValue || image} placeholder='Image Url'
            onChange={this.changeImageValue.bind(this)} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='github'>Github Repo</label>
          <input className='input' type='text' ref='github'
            defaultValue={newGithubValue || github} placeholder='Github Repo'
            onChange={this.changeGithubValue.bind(this)} />
        </p>
        <p className='control'>
          <label className='label' htmlFor='preview'>Preview/Live Url</label>
          <input className='input' type='text' ref='preview'
            defaultValue={newPreviewValue || preview} placeholder='Preview/Live Url'
            onChange={this.changePreviewValue.bind(this)} />
        </p>
      </div>
    )
  }

  renderText() {
    const project = this.props.currentProject

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
      <div className='column is-8 is-offset-2'>
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={ newImageValue || project.image } alt="Image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{ newTitleValue || project.title }</p>
            <p className="subtitle is-6">{ newSubtitleValue || project.subtitle }</p>
          </div>
        </div>
        <div className="content">
          { newDescriptionValue || project.description }
          <br /><br />
          <a href={ newGithubValue || project.github } target='_blank'>Github</a><br />
          <a href={ newPreviewValue || project.preview } target='_blank'>Live Preview</a>
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
