import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Content from './Content'

chai.use(chaiEnzyme())

describe('<Content />', () => {

  context ('Normally', () => {
    const currentPage = { link: 'about', title: 'About', content: 'Hello World'}
    const content = shallow(<Content currentPage={currentPage} />)

    it ('wraps with a section', () => {
      expect(content).to.have.tagName('section')
    })
    it ('renders a Title component', () => {
      expect(content).to.have.exactly(1).descendants('Title')
    })
    it ('displays a div with the content', () => {
      expect(content).to.contain.html('<div>Hello World</div>')
    })
  })

  context ('When on Projects tab', () => {
    const currentPage = { link: 'projects', title: 'Projects', content: null}
    const content = shallow(<Content currentPage={currentPage} />)

    it ('Renders a Projects component instead', () => {
      expect(content).to.have.descendants('Projects')
    })
  })
})
