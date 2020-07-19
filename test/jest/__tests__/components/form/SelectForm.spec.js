/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import flushPromises from 'flush-promises'
import { mount, createLocalVue } from '@vue/test-utils'
import SelectFormTest from '../../_demo/components/form/SelectForm-test.vue'
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

describe('SelectFormTest', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) // , lang: langEn

  const wrapper = mount(SelectFormTest, {
    localVue,
    propsData: {
      label: 'テストラベル',
      inputs: [
        { label: '選択肢1', value: '1' },
        { label: '選択肢2', value: '2' }
      ],
      color: 'red'
    }
  })
  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(vm).toBeTruthy()

  })

  it('選択肢のみを渡すと、エラーにはならない', () => {
    const wrapper2 = mount(SelectFormTest, {
      localVue,
      propsData: {
        label: 'テストラベル',
        inputs: [
          { label: '選択肢1', value: '1' },
          { label: '選択肢2', value: '2' },
        ]
      }
    })

    expect(wrapper2.html()).not.toContain('bg-red')
  })

  it('カラー@redと選択肢を渡すと、エラー状態になって表示される', () => {
    expect(wrapper.vm.$el.textContent).toContain('テストラベル')
    expect(wrapper.text()).toContain('テストラベル')
    expect(wrapper.html()).toContain('bg-red')
  })

  it('correctly updates data when q-radio is pressed', async () => {
    const dropdownIcon = wrapper.find('.q-select__dropdown-icon')
    dropdownIcon.trigger('click')
    await flushPromises()
    // TODO リストの表示確認
  })
})
