import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Title from '../../shared/components/Title'

class Page extends PureComponent {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      newTitleValue: '',
      newContentValue: ''
    }
  }

  changeTitleValue() {

  }
  changeContentValue() {
    
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentPage.link !== newProps.currentPage.link) {
      this.setState({ isEditing: false })
    }
  }

  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    const { link, title, content } = this.props.currentPage
    const { isEditing } = this.state

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            { !isEditing && title }
            { isEditing &&
              <span className='control'>
                <input className='input' type='text' defaultValue={title} />
              </span>
            }
          </p>
          <p className='card-header-icon'>id: {link}</p>
        </header>
        <div className="card-content">
          <div className="content">
            { !isEditing && content }
            { isEditing &&
              <div className='control'>
                <textarea className='textarea' defaultValue={content}></textarea>
              </div>
            }
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item">Save</a>
          <a className="card-footer-item" onClick={this.toggleEditing.bind(this)}>
            { !isEditing && 'Edit' }
            { isEditing && 'Preview' }
          </a>
          <a className="card-footer-item">Delete</a>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({currentPage}) => ({currentPage})
export default connect(mapStateToProps)(Page)
