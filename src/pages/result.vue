<template>
  <q-page>
    <LeftArticle>
      <template v-slot:head>
        ご回答ありがとうございました。
      </template>
      <template v-slot:body>
        <div class="q-pa-md">
          <q-table
            title="回答結果"
            :data="rows"
            row-key="name"
            :rows-per-page-options="[0]"
            hide-bottom
          />
        </div>
      </template>
    </LeftArticle>
    <single-button to="/" :width="200" body="最初に戻る" />
  </q-page>
</template>

<script>
import LeftArticle from 'src/layouts/left-article'
import { SingleButton } from '../components/button'
import Questions from 'src/const/questions'
import { VALUES_KEYS } from 'src/store/modules/form'

function getAnswer(options, value) {
  const target = options.filter(o => o.value === value)[0]
  return target ? target.label : ''
}

function getAnswers(options, values) {
  return values.map(value => getAnswer(options, value)).join(', ')
}

export default {
  name: 'result',
  components: {
    LeftArticle,
    SingleButton
  },
  computed: {
    rows() {
      return [
        {
          No: '1',
          question: Questions.Q1.q,
          answer: getAnswer(Questions.Q1.options, this.values[VALUES_KEYS.haveSeen])
        },
        {
          No: '2',
          question: Questions.Q2.q,
          answer: getAnswers(Questions.Q2.options, this.values[VALUES_KEYS.trigger])
        },
        {
          No: "2'",
          question: Questions.Q3.q,
          answer: this.values[VALUES_KEYS.triggerText]
        },
        {
          No: '3',
          question: Questions.Q3.q,
          answer: getAnswers(Questions.Q3.options, this.values[VALUES_KEYS.impression])
        },
        {
          No: "3'",
          question: Questions.Q3.q,
          answer: this.values[VALUES_KEYS.impressionText]
        },
        {
          No: '4-1',
          question: Questions.Q4_1.q,
          answer: getAnswer(Questions.Q4_1.options, this.values[VALUES_KEYS.understand])
        },
        {
          No: '4-2',
          question: Questions.Q4_2.q,
          answer: getAnswer(Questions.Q4_2.options, this.values[VALUES_KEYS.interested])
        },
        {
          No: '4-3',
          question: Questions.Q4_3.q,
          answer: getAnswer(Questions.Q4_3.options, this.values[VALUES_KEYS.impressive])
        },
        {
          No: '4-4',
          question: Questions.Q4_4.q,
          answer: getAnswer(Questions.Q4_4.options, this.values[VALUES_KEYS.wantToBuy])
        },
        {
          No: '5',
          question: Questions.Q5.q,
          answer: getAnswers(Questions.Q5.options, this.values[VALUES_KEYS.WhatKindOfAction])
        },
        {
          No: '6',
          question: Questions.Q6.q,
          answer: getAnswer(Questions.Q6.options, this.values[VALUES_KEYS.sex])
        },
        {
          No: '7',
          question: Questions.Q7.q,
          answer: getAnswer(Questions.Q7.options, this.values[VALUES_KEYS.age])
        },
        {
          No: '8',
          question: Questions.Q8.q,
          answer: getAnswer(Questions.Q8.options, this.values[VALUES_KEYS.prefectures])
        },
        {
          No: '-',
          question: 'フリーコメント',
          answer: this.values[VALUES_KEYS.freeComment]
        }
      ]
    }
  }
}
</script>
