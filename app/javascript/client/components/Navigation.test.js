import React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'

import wrapper from '../test-wrapper'

import setCurrentPage from '../../shared/actions/pages/set-current'
import Navigation from './Navigation'

chai.use(chaiEnzyme())
chai.use(spies)

const pages = [
  { link: 'about', title: 'About', content: 'content'},
  { link: 'contact', title: 'Contact', content: 'Contact me'}
]
const currentPage = { link: 'about', title: 'About', content: 'content'}
const navigation = wrapper(<Navigation pages={pages} currentPage={currentPage} />)
const changePage = chai.spy()

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

  context ('When clicking on the active tab', () => {
    it ('Doesn\'t change anything', () => {
      navigation.find('#about').simulate('click')
      expect(navigation.find('#about')).to.have.className('is-active')
      expect(navigation.find('#contact')).to.not.have.className('is-active')
    })
  })

  // FIXME: This works, test is wrong
  context ('When clicking on another tab', () => {
    it ('changes active state to the clicked tab', () => {
      navigation.find('#contact').simulate('click')
      
      expect(changePage).to.have.been.called.exactly.once()
      expect(navigation.find('#contact')).to.have.className('is-active')
      expect(navigation.find('#about')).to.not.have.className('is-active')
    })
  })
})
