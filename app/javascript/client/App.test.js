import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import App from './App'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {
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
