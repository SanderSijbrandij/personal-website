import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import fetchPages from '../shared/actions/pages/fetch'
import fetchProjects from '../shared/actions/projects/fetch'
import setCurrentPage from '../shared/actions/pages/set-current'

import Banner from './components/Banner'
import Navigation from './components/Navigation'
import Content from './components/Content'

export class App extends PureComponent {
  static get propTypes() {
    return {
      pages: PropTypes.array.isRequired,
      currentPage: PropTypes.object.isRequired,
      projects: PropTypes.array.isRequired,
      fetchPages: PropTypes.func.isRequired,
      fetchProjects: PropTypes.func.isRequired,
    }
  }

  componentWillMount() {
    this.props.fetchPages()
    this.props.fetchProjects()
  }

  changePage(page) {
    if (page === 'projects') {
      this.props.setCurrentPage(this.props.pages, 'projects')
      return false
    }
    this.props.setCurrentPage(this.props.pages, page)
  }

  render() {
    const { pages, currentPage, projects, setCurrentPage } = this.props

    return (
      <div className='content'>
        <Banner />
        <Navigation pages={pages} currentPage={currentPage} changePage={this.changePage.bind(this)}/>
        <Content currentPage={currentPage} projects={projects} />
      </div>
    )
  }
}
const mapStateToProps = ({
  pages, currentPage, projects
}) => ({
  pages, currentPage, projects
})
export default connect(mapStateToProps, { fetchPages, fetchProjects, setCurrentPage})(App)
