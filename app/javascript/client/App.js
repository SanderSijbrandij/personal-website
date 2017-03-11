import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import fetchPages from '../shared/actions/pages/fetch'

import Banner from './components/Banner'
import Navigation from './components/Navigation'
import Content from './components/Content'

export class App extends PureComponent {
  componentWillMount() {
    this.props.fetchPages()
  }
  render() {
    const { pages, currentPage } = this.props

    return (
      <div className='content'>
        <Banner />
        <Navigation pages={pages} currentPage={currentPage}/>
        <Content currentPage={currentPage} />
      </div>
    )
  }
}
const mapStateToProps = ({pages, currentPage}) => ({pages, currentPage})
export default connect(mapStateToProps, { fetchPages})(App)
