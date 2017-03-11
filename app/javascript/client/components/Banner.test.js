import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Banner from './Banner'

chai.use(chaiEnzyme())

const banner = shallow(<Banner />)

describe('<Banner />', () => {
  it ('wraps with a section', () => {
    expect(banner).to.have.tagName('section')
  })
  it ('renders 2 Title components', () => {
    expect(banner).to.have.exactly(2).descendants('Title')
  })
})
