import React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import { Navigation } from './Navigation'

chai.use(chaiEnzyme())

const pages = [
  { link: 'about', title: 'About', content: 'content'},
  { link: 'contact', title: 'Contact', content: 'Contact me'}
]
const currentPage = { link: 'about', title: 'About', content: 'content'}
const navigation = shallow(<Navigation pages={pages} currentPage={currentPage} />)

describe('<Navigation />', () => {
  it ('wraps a nav', () => {
    expect(navigation).to.have.tagName('nav')
  })
  it ('has exactly 3 tabs', () => {
    expect(navigation).to.have.exactly(3).descendants('.is-tab')
  })
  it ('has exactly 1 active tab', () => {
    expect(navigation).to.have.exactly(1).descendants('.is-active')
  })
  it ('has active tab equal to current Page', () => {
    const activeTab = navigation.find('.is-active')
    expect(activeTab).to.have.text('About')
    expect(activeTab).to.not.have.text('Contact')
  })
})
