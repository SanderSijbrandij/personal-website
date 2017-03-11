import React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import { Navigation } from './Navigation'

chai.use(chaiEnzyme())

const navigation = shallow(<Navigation />)

describe('<Navigation />', () => {
})
