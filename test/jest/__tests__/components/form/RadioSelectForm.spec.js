/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import flushPromises from 'flush-promises'
import { mount, createLocalVue } from '@vue/test-utils'
import RadioSelectFormTest from '../../_demo/components/form/RadioSelectForm-test.vue'
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

  const wrapper = mount(RadioSelectFormTest, {
    localVue,
    propsData: {
      noneLabel: 'noneLabel',
      noneValue: 'noneValue',
      existLabel: 'existLabel',
      existValue: 'existValue',
      selectLabel: 'selectLabel',
      options: [
        { label: '選択肢1', value: '1' },
        { label: '選択肢2', value: '2' }
      ]
    }
  })
  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(vm).toBeTruthy()

  })

  it('選択肢のみを渡すと、エラーにはならない', () => {
    expect(wrapper.text()).toContain('noneLabel')
    expect(wrapper.text()).toContain('existLabel')
    expect(wrapper.html()).not.toContain('bg-red')
  })

  it('カラー@redと選択肢を渡すと、エラー状態になって表示される', () => {
    const wrapper2 = mount(RadioSelectFormTest, {
      localVue,
      propsData: {
        noneLabel: 'noneLabel',
        noneValue: 'noneValue',
        existLabel: 'existLabel',
        existValue: 'existValue',
        selectLabel: 'selectLabel',
        options: [
          { label: '選択肢1', value: '1' },
          { label: '選択肢2', value: '2' }
        ],
        color: 'red'
      }
    })

    expect(wrapper2.text()).toContain('noneLabel')
    expect(wrapper2.text()).toContain('existLabel')
    expect(wrapper2.html()).not.toContain('bg-red')
  })

  it('correctly updates data when q-radio is pressed', () => {
    const radioOptions = wrapper.findAll('.q-radio')
    radioOptions.at(0).trigger('click')
    expect(vm.radioModel).toBe('noneValue')

    radioOptions.at(1).trigger('click')
    expect(vm.radioModel).toBe('existValue')
  })

  it('はいを選択したとき、セレクトボックスが表示されること', async () => {
    const radioOptions = wrapper.findAll('.q-radio')

    radioOptions.at(1).trigger('click')
    expect(vm.radioModel).toBe('existValue')
    await flushPromises()
    // TODO リストの表示確認
  })
})
