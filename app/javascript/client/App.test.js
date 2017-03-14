import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import App from './App'
import wrapper from './test-wrapper'

chai.use(chaiEnzyme())

const app = wrapper(<App />)

describe('<App />', () => {
  it ('wraps a div', () => {
    expect(app).to.have.tagName('div')
  })
  it ('Renders a Banner component', () => {
    expect(app).to.have.descendants('Banner')
  })
  it ('Renders a Navigation component', () => {
    expect(app).to.have.descendants('Navigation')
  })
  it ('Renders a Content component', () => {
    expect(app).to.have.descendants('Content')
  })
})
