import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import fetchPages from '../../actions/pages/fetch'
import getCurrentPage from '../../actions/pages/set-current'

class Content extends PureComponent {
  componentWillMount() {
    this.props.fetchPages()
  }

  render() {
    return (
      <div className='main'>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({pages, currentPage}) => ({pages, currentPage})
export default connect(mapStateToProps, { fetchPages, getCurrentPage })(Content)
