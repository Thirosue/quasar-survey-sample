import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as form from './modules/form'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
export const GETTER_TYPES = {
  GET_CANNOT_PROCESSING_FLG: 'GET_CANNOT_PROCESSING_FLG',
  GET_PROCESSING: 'GET_PROCESSING',
  GET_LOADING: 'GET_LOADING'
}

export const MUTATION_TYPES = {
  SET_CANNOT_PROCESSING_FLG: 'SET_CANNOT_PROCESSING_FLG',
  SET_PROCESSING: 'SET_PROCESSING',
  SET_LOADING: 'SET_LOADING'
}

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      form
    },
    state: {
      cannotProgressFlg: false,
      processing: false,
      loading: false,
      mode: process.env.NODE_ENV
    },
    getters: {
      [GETTER_TYPES.GET_CANNOT_PROCESSING_FLG](state) {
        return state.cannotProgressFlg
      },
      [GETTER_TYPES.GET_PROCESSING](state) {
        return state.processing
      },
      [GETTER_TYPES.GET_LOADING](state) {
        return state.loading
      }
    },
    mutations: {
      [MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG](state, cannotProgressFlg) {
        state.cannotProgressFlg = cannotProgressFlg
      },
      [MUTATION_TYPES.SET_PROCESSING](state, processing) {
        state.processing = processing
      },
      [MUTATION_TYPES.SET_LOADING](state, loading) {
        state.loading = loading
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
    plugins: [createPersistedState({ storage: window.sessionStorage })]
  })

  return Store
}
