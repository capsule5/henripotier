import React from 'react'
import { shallow } from 'enzyme'
import Header from 'Cmp/header/Header'

it('renders Header', () => {
  const component = <Header />
  shallow(component)
})
