import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Title from '../../shared/components/Title'

class Project extends PureComponent {
  render() {
    return <h1>this is a single project</h1>
  }

}

const mapStateToProps = ({currentProject}) => ({currentProject})
export default connect(mapStateToProps)(Project)
