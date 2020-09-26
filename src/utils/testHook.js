// https://medium.com/@nitinpatel_20236/unit-testing-custom-react-hooks-caa86f58510

import React from 'react'
import { mount } from 'enzyme'

const TestHook = ({ callback }) => {
  callback()
  return null
}

export const testHook = (callback) => {
  mount(<TestHook callback={ callback } />)
}
