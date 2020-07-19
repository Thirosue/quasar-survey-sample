/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue } from '@vue/test-utils'
import DefalutLayoutTest from '../_demo/layouts/DefalutLayout-test.vue'
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

describe('DefalutLayoutTest', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) // , lang: langEn

  beforeEach(() => {
    console.error = jest.fn()
  });

  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = mount(DefalutLayoutTest, {
      localVue,
      // グローバルまたはローカルに登録されたコンポーネントを上書き
      // https://vue-test-utils.vuejs.org/ja/guides/common-tips.html#%E3%82%B9%E3%82%BF%E3%83%96%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88
      stubs: ['q-page']
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it('accesses the shallowMount', () => {
    const wrapper1 = mount(DefalutLayoutTest, {
      localVue,
      // グローバルまたはローカルに登録されたコンポーネントを上書き
      // https://vue-test-utils.vuejs.org/ja/guides/common-tips.html#%E3%82%B9%E3%82%BF%E3%83%96%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88
      stubs: ['q-page'],
      propsData: {
        q: 'テスト質問1',
        content: 'コンテンツ1'
      }
    })

    expect(wrapper1.vm.$el.textContent).toContain('テスト質問1')
    expect(wrapper1.text()).toContain('テスト質問1')

    expect(wrapper1.vm.$el.textContent).toContain('コンテンツ1')
    expect(wrapper1.text()).toContain('コンテンツ1')

    const wrapper2 = mount(DefalutLayoutTest, {
      localVue,
      // グローバルまたはローカルに登録されたコンポーネントを上書き
      // https://vue-test-utils.vuejs.org/ja/guides/common-tips.html#%E3%82%B9%E3%82%BF%E3%83%96%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88
      stubs: ['q-page'],
      propsData: {
        q: 'テスト質問2',
        content: 'コンテンツ2'
      }
    })

    expect(wrapper2.vm.$el.textContent).toContain('テスト質問2')
    expect(wrapper2.text()).toContain('テスト質問2')

    expect(wrapper2.vm.$el.textContent).toContain('コンテンツ2')
    expect(wrapper2.text()).toContain('コンテンツ2')
  })
})
