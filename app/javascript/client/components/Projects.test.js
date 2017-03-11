import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Projects from './Projects'

chai.use(chaiEnzyme())

const someProjects = [{
  id: 1,
  title: 'Portfolio Test',
  subtitle: 'Testing React',
  description: 'This project was a lot of fun and we learned loads!',
  github: 'http://github.com/',
  preview: 'http://somecoolproject.herokuapp.com/',
  image: 'http://placehold.it/400x300',
  tags: [{id: 1, text: 'chai'}, {id: 2, text: 'mocha'}]
},
{
  id: 2,
  title: 'Portfolio',
  subtitle: 'Building the app',
  description: 'This was definitely a lot easier to accomplish',
  github: 'http://github.com/2',
  preview: 'http://somesupercoolproject.herokuapp.com/',
  image: 'http://placehold.it/800x600',
  tags: [{id: 3, text: 'react'}, {id: 4, text: 'redux'}]
}]
const projects = shallow(<Projects projects={someProjects} />)

describe('<Projects />', () => {
  it ('wraps a section', () => {
    expect(projects).to.have.tagName('section')
  })
  it ('renders a Title component', () => {
    expect(projects).to.have.exactly(1).descendants('Title')
  })
  it ('renders 1 card per project', () => {
    expect(projects).to.have.exactly(2).descendants('.card')
  })
  it ('displays title for all projects', () => {
    expect(projects).to.contain.text('Portfolio Test')
    expect(projects).to.contain.text('Portfolio')
  })
  it ('displays subtitle for all projects', () => {
    expect(projects).to.contain.text('Testing React')
    expect(projects).to.contain.text('Building the app')
  })
  it ('displays description for all projects', () => {
    expect(projects).to.contain.text('This project was a lot of fun and we learned loads!')
    expect(projects).to.contain.text('This was definitely a lot easier to accomplish')
  })
  it ('displays github for all projects', () => {
    expect(projects).to.contain.html('<a href="http://github.com/" target="_blank"')
    expect(projects).to.contain.html('<a href="http://github.com/2" target="_blank"')
  })
  it ('displays preview for all projects', () => {
    expect(projects).to.contain.html('<a href="http://somecoolproject.herokuapp.com/" target="_blank"')
    expect(projects).to.contain.html('<a href="http://somesupercoolproject.herokuapp.com/" target="_blank"')
  })
  it ('displays image for all projects', () => {
    expect(projects).to.have.exactly(2).descendants('img')
  })
  it ('displays tags for all projects', () => {
    expect(projects).to.contain.text('chai')
    expect(projects).to.contain.text('mocha')
    expect(projects).to.contain.text('react')
    expect(projects).to.contain.text('redux')
  })
})
