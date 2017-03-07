import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Title from '../../shared/components/Title'

class Page extends PureComponent {
  render() {
    const { link, title, content } = this.props.currentPage
    return (
      <article className="article">
        <Title type='title' level='p' size='2' text={title} />
        <Title type='subtitle' level='p' size='4' text={link} />
        { content }
        <hr />
        InLine editor?
      </article>
    )
  }
}

const mapStateToProps = ({currentPage}) => ({currentPage})
export default connect(mapStateToProps)(Page)
