import React, { PureComponent } from 'react'

export default class Page extends PureComponent {
  render() {
    const { link, title, content } = this.props
    return (
      <article className="article">
        <h1 className='title is-2'>{title} <p className='subtitle is-5'>/{link}</p></h1>
        { content }
        <hr />
        Add edit form here.
      </article>
    )
  }
}
