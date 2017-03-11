import React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import Navigation from './Navigation'

chai.use(chaiEnzyme())
chai.use(spies)

const changePage = (page) => { return null }
const spy = chai.spy(changePage)

const pages = [{ link: 'about', title: 'About', content: 'content'},{ link: 'contact', title: 'Contact', content: 'Contact me'}]
const currentPage = { link: 'about', title: 'About', content: 'content'}
const navigation = shallow(<Navigation pages={pages} currentPage={currentPage} changePage={spy} />)

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
  it ('clicking a tab makes a call to changePage with the link as argument', () => {
    navigation.find('#contact').simulate('click')
    expect(spy).to.have.been.called.exactly.once()
    expect(spy).to.have.been.called.with('contact')
  })
})
