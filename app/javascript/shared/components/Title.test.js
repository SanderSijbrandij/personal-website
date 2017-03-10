import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'

chai.use(chaiEnzyme())

describe ('<Title />', () => {
  context('prop: level', () => {
    it ('renders an h1 with level=1', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='1' />)
      expect(title).to.have.descendants('h1')
    })
    it ('renders an h2 with level=2', () => {
      const title = shallow(<Title text='Hello Test' level='2' type='title' size='1' />)
      expect(title).to.have.descendants('h2')
    })
    it ('renders an h3 with level=3', () => {
      const title = shallow(<Title text='Hello Test' level='3' type='title' size='1' />)
      expect(title).to.have.descendants('h3')
    })
    it ('renders an h4 with level=4', () => {
      const title = shallow(<Title text='Hello Test' level='4' type='title' size='1' />)
      expect(title).to.have.descendants('h4')
    })
    it ('renders an h5 with level=5', () => {
      const title = shallow(<Title text='Hello Test' level='5' type='title' size='1' />)
      expect(title).to.have.descendants('h5')
    })
    it ('renders an h6 with level=6', () => {
      const title = shallow(<Title text='Hello Test' level='6' type='title' size='1' />)
      expect(title).to.have.descendants('h6')
    })
    it ('renders an p with level=p', () => {
      const title = shallow(<Title text='Hello Test' level='p' type='title' size='1' />)
      expect(title).to.have.descendants('p')
    })
  })

  context('prop: text', () => {
    const title = shallow(<Title text='Hello Test' level='1' type='title' size='1' />)
    it ('renders the passed text', () => {
      expect(title).to.have.text('Hello Test')
    })
    it ('doesn\'t render other text', () => {
      expect(title).to.not.have.text('Hello World')
    })
  })

  context('prop: type', () => {
    it ('renders a tag with class: title when type is title', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='1' />)
      expect(title.find('h1')).to.have.className('title')
    })
    it ('renders a tag with class: subtitle when type is subtitle', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='subtitle' size='1' />)
      expect(title.find('h1')).to.have.className('subtitle')
    })
  })

  context('prop: size', () => {
    it ('renders a tag with class: is-1 when size is 1', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='1' />)
      expect(title.find('h1')).to.have.className('is-1')
    })
    it ('renders a tag with class: is-2 when size is 2', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='2' />)
      expect(title.find('h1')).to.have.className('is-2')
    })
    it ('renders a tag with class: is-3 when size is 3', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='3' />)
      expect(title.find('h1')).to.have.className('is-3')
    })
    it ('renders a tag with class: is-3 when size is 3', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='3' />)
      expect(title.find('h1')).to.have.className('is-3')
    })
    it ('renders a tag with class: is-4 when size is 4', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='4' />)
      expect(title.find('h1')).to.have.className('is-4')
    })
    it ('renders a tag with class: is-5 when size is 5', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='5' />)
      expect(title.find('h1')).to.have.className('is-5')
    })
    it ('renders a tag with class: is-6 when size is 6', () => {
      const title = shallow(<Title text='Hello Test' level='1' type='title' size='6' />)
      expect(title.find('h1')).to.have.className('is-6')
    })
  })
})
