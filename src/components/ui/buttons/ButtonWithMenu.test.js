import React from 'react'
import { mount, shallow } from 'enzyme'
import ButtonWithMenu from './ButtonWithMenu'

const props = {
  content: 'button text',
  params: {},
  className: '',
}

const component = <ButtonWithMenu { ...props }>menu</ButtonWithMenu>

it('renders ButtonWithMenu', () => {
  const wrapper = mount(component)
  expect(wrapper.prop('content')).toContain('button text')
  expect(wrapper.prop('children')).toContain('menu')
})

it('opens menu on button click', () => {
  const wrapper = shallow(component)
  // console.warn(wrapper.debug())
  const button = wrapper.find('button')
  const menu = wrapper.find('WithStyles(ForwardRef(Menu))')
  expect(menu.props().open).toEqual(false)
  button.simulate('click')
  expect(
    wrapper
      .update() // update needed since setState is async
      .find('WithStyles(ForwardRef(Menu))')
      .props().open,
  ).toEqual(true)
})
