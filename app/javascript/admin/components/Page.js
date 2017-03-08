import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Title from '../../shared/components/Title'
import updatePage from '../actions/pages/update'
import destroyPage from '../actions/pages/destroy'
import createPage from '../actions/pages/create'

class Page extends PureComponent {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      hasChanged: false,
      newTitleValue: null,
      newContentValue: null,
      newLinkValue: null
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentPage !== newProps.currentPage) {
      this.setState({
        isEditing: false,
        hasChanged: false,
        newTitleValue: null,
        newContentValue: null,
        newLinkValue: null
      })
    }
  }

  changeTitleValue() {
    const changed = (this.props.currentPage.title !== this.refs.title.value)
    this.setState({ newTitleValue: this.refs.title.value, hasChanged: changed })
  }

  changeContentValue() {
    const changed = (this.props.currentPage.content !== this.refs.content.value)
    this.setState({ newContentValue: this.refs.content.value, hasChanged: changed })
  }

  changeLinkValue() {
    const changed = (this.props.currentPage.link !== this.refs.link.value)
    this.setState({ newLinkValue: this.refs.link.value, hasChanged: changed })
  }

  toggleEditing() {
    const { isEditing, hasChanged, newTitleValue, newContentValue } = this.state
    const { title, content } = this.props.currentPage

    const changed = (
      (newTitleValue !== title || newContentValue !== content) &&
      (newTitleValue !== null || newContentValue !== null)
    )

    this.setState({ isEditing: !isEditing })
    this.setState({ hasChanged: changed })
  }

  saveChanges() {
    const { link, title, content } = this.props.currentPage
    const { newTitleValue, newContentValue, newLinkValue } = this.state

    if (this.state.hasChanged && link !== null) {
      const saveTitle = newTitleValue || title
      const saveContent = newContentValue || content

      this.props.updatePage(link, {
        title: saveTitle,
        content: saveContent
      })
    } else if (link === null) {
      const saveTitle = newTitleValue
      const saveContent = newContentValue
      const saveLink = newLinkValue

      if (saveTitle === null || saveContent === null || saveLink === null) {
        window.alert('Please fill in something for each field.')
        return false
      }

      this.props.createPage({
        link: saveLink,
        title: saveTitle,
        content: saveContent
      })
    }

    this.setState({ isEditing: false })
  }

  deletePage() {
    const { link } = this.props.currentPage
    if (link == 'about') {
      window.alert('you can\'t delete the about page. Edit it instead.')
      return false
    }
    if (window.confirm(`are you sure you want to delete ${link}?`)) {
      this.props.destroyPage(link)
    }
  }

  renderTitleText() {
    const { title } = this.props.currentPage
    const { newTitleValue } = this.state
    if (title == newTitleValue || newTitleValue == null) {
      return title
    } else {
      return newTitleValue
    }
  }

  renderContentText() {
    const { content } = this.props.currentPage
    const { newContentValue } = this.state
    const displayText = (newContentValue === null) ? content : newContentValue

    return <div dangerouslySetInnerHTML={{__html: displayText }}></div>
  }

  renderTitleEdit() {
    const { link, title } = this.props.currentPage
    const { newTitleValue } = this.state

    return (
      <span className='control'>
        <input className='input' type='text' defaultValue={newTitleValue || title}
               onChange={this.changeTitleValue.bind(this)}
               ref='title' placeholder='Page title'/>
      </span>
    )
  }

  renderContentEdit() {
    const { content } = this.props.currentPage
    const { newContentValue } = this.state

    return (
      <div className='control'>
        <textarea className='textarea' defaultValue={newContentValue || content}
                  onChange={this.changeContentValue.bind(this)}
                  ref='content' placeholder='Page text'>
        </textarea>
      </div>
    )
  }

  renderLinkEdit() {
    const { link } = this.props.currentPage
    return (
      <input type='text' className='input' ref='link' placeholder='Unique Identifier'
             onChange={this.changeLinkValue.bind(this)} />
    )
  }

  render() {
    const { link, title, content } = this.props.currentPage
    const { isEditing, hasChanged, newLinkValue } = this.state

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            { !isEditing && this.renderTitleText() }
            { isEditing && this.renderTitleEdit() }
          </p>
          <p className='card-header-icon'>
            { (!!link || !isEditing) && `id: ${newLinkValue || link || '...'}` }
            { (!link && isEditing) && this.renderLinkEdit() }
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            { !isEditing && this.renderContentText() }
            { isEditing && this.renderContentEdit() }
          </div>
        </div>
        <footer className="card-footer">
          { !hasChanged &&
            <a className="card-footer-item is-disabled">No changes...</a>
          }
          { hasChanged &&
            <a className="card-footer-item"
               onClick={this.saveChanges.bind(this)}>Save changes</a>
          }
          <a className="card-footer-item" onClick={this.toggleEditing.bind(this)}>
            { !isEditing && 'Edit' }
            { isEditing && 'Preview' }
          </a>
          <a className="card-footer-item" onClick={this.deletePage.bind(this)}>Delete</a>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({currentPage}) => ({currentPage})
export default connect(mapStateToProps, { updatePage, destroyPage, createPage })(Page)
