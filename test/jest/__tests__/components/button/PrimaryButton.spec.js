/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue } from '@vue/test-utils'
import PrimaryButtonTest from '../../_demo/components/button/PrimaryButton-test.vue'
import * as All from 'quasar'
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar, date } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('PrimaryButtonTest', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) // , lang: langEn

  const wrapper = mount(PrimaryButtonTest, {
    localVue
  })
  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(vm).toBeTruthy()
  })

  it('accesses the shallowMount', () => {
    const wrapper1 = mount(PrimaryButtonTest, {
      localVue,
      propsData: {
        content: 'コンテンツ1',
        width: 999
      }
    })

    expect(wrapper1.vm.$el.textContent).toContain('コンテンツ1')
    expect(wrapper1.text()).toContain('コンテンツ1')
    expect(wrapper1.html()).toContain('999')

    const wrapper2 = mount(PrimaryButtonTest, {
      localVue,
      propsData: {
        content: 'コンテンツ2',
        width: 777
      }
    })

    expect(wrapper2.vm.$el.textContent).toContain('コンテンツ2')
    expect(wrapper2.text()).toContain('コンテンツ2')
    expect(wrapper2.html()).toContain('777')
  })

  it('correctly updates data when button is pressed', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(vm.counter).toBe(1)
    button.trigger('click')
    expect(vm.counter).toBe(2)
  })
})
