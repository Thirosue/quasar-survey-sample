/* eslint-disable */
import buildModuleTypes from 'src/helpers/store';

const moduleName = 'form';
const GETTER_TYPES = {
  VALUES: 'VALUES', // 回答内容をすべて取得する
};
const MUTATION_TYPES = {
  SET_VALUES_CHILD: 'SET_VALUES_CHILD', // 回答内容セット
  CLEAR_VALUES: 'CLEAR_VALUES',
};

export const FORM_GETTER_TYPES = buildModuleTypes({
  moduleName,
  types: GETTER_TYPES,
});

export const FORM_MUTATION_TYPES = buildModuleTypes({
  moduleName,
  types: MUTATION_TYPES,
});

export const namespaced = true;

const values = { // 回答内容
  // 変数名                          // 初期値
  haveSeen: '', // Q1 見たことあるか
  trigger: [], // Q2 きっかけ
  triggerText: null, // Q2 その他（自由入力）
  impression: [], // Q3 印象
  impressionText: null, // Q3 その他（自由入力）
  understand: '', // Q4-1 理解できた
  interested: '', // Q4-2 興味がわいた
  impressive: '', // Q4-3 印象的だった
  wantToBuy: '', // Q4-4 買いたい
  WhatKindOfAction: [], // Q5 その後どうした？
  sex: '', // Q6 性別
  age: '', // Q7 年齢
  prefectures: '', // Q8 都道府県
  freeComment: null, // フリーコメント
};

export const state = {
  values: { ...{}, ...values },
};
export const getKeys = () => {
  const arr = Object.keys(state.values);
  const obj = {};
  arr.forEach((data, i) => {
    obj[data] = data;
  });
  return obj;
};

export const getters = {
  [GETTER_TYPES.VALUES](state) {
    return state.values;
  },
};

/** 回答情報のKey */
export const VALUES_KEYS = getKeys();

export const mutations = {
  [MUTATION_TYPES.CLEAR_VALUES](state) {
    state.values = {
      ...{},
      ...values,
    };
  },
  /**
   * 回答情報を格納する
   * @param {*} state この中のState
   * @param {*} obj {key:VALUES_KEYS, valueは格納する値}
   */
  [MUTATION_TYPES.SET_VALUES_CHILD](state, obj) {
    state.values[obj.key] = obj.value;
  },
};