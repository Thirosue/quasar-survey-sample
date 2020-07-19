/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue } from '@vue/test-utils'
import RadioFormTest from '../../_demo/components/form/RadioForm-test.vue'
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

describe('RadioFormTest', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) // , lang: langEn

  const wrapper = mount(RadioFormTest, {
    localVue,
    propsData: {
      inputs: [
        { label: '選択肢1', value: '1' },
        { label: '選択肢2', value: '2' },
        { label: '選択肢3', value: '3' }
      ],
      color: 'red'
    }
  })
  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(vm).toBeTruthy()
  })

  it('選択肢のみを渡すと、選択肢のみ表示される', () => {
    const wrapper2 = mount(RadioFormTest, {
      localVue,
      propsData: {
        inputs: [
          { label: '選択肢11', value: '1' },
          { label: '選択肢22', value: '2' },
          { label: '選択肢33', value: '3' },
          { label: '選択肢44', value: '4' },
          { label: '選択肢55', value: '5' },
          { label: '選択肢66', value: '6' },
        ]
      }
    })

    expect(wrapper2.text()).toContain('選択肢11')
    expect(wrapper2.text()).toContain('選択肢22')
    expect(wrapper2.text()).toContain('選択肢33')
    expect(wrapper2.text()).toContain('選択肢44')
    expect(wrapper2.text()).toContain('選択肢55')
    expect(wrapper2.text()).toContain('選択肢66')
    expect(wrapper2.text()).not.toContain('選択してください。')
  })

  it('カラー@redと選択肢を渡すと、エラー状態になって表示される', () => {
    expect(wrapper.vm.$el.textContent).toContain('選択肢1')
    expect(wrapper.text()).toContain('選択肢1')
    expect(wrapper.text()).toContain('選択肢2')
    expect(wrapper.text()).toContain('選択肢3')
    expect(wrapper.text()).toContain('選択してください。')
  })

  it('correctly updates data when q-radio is pressed', () => {
    const radio = wrapper.findAll('.q-radio')
    radio.at(0).trigger('click')
    expect(vm.model).toBe('1')

    radio.at(1).trigger('click')
    expect(vm.model).toBe('2')

    radio.at(2).trigger('click')
    expect(vm.model).toBe('3')
  })
})
