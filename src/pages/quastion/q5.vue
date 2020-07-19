<template>
  <div>
    <DefaultLayOut :q="q">
      <template v-slot:content>
        <CheckListForm
          :bgColor="color"
          :options="questions.options"
          v-model="model"
          disableValue="0"
        />
        <button-group :nextAction="next" />
      </template>
    </DefaultLayOut>
  </div>
</template>

<script>
import { MUTATION_TYPES } from 'src/store'
import { VALUES_KEYS, FORM_MUTATION_TYPES } from 'src/store/modules/form'
import Questions from 'src/const/questions'
import CheckListForm from 'components/form/checklist-form'
import DefaultLayOut from '../../layouts/default-layout.vue'
import { ButtonGroup } from '../../components/button'

export default {
  name: 'Q5',
  components: {
    CheckListForm,
    DefaultLayOut,
    ButtonGroup
  },
  data() {
    return {
      questions: Questions.Q5
    }
  },
  computed: {
    q() {
      return this.getQuestion(this.$router.history.current.meta.title, this.questions.q)
    },
    model: {
      get() {
        return this.values[VALUES_KEYS.WhatKindOfAction]
      },
      set(value) {
        this.$store.commit(MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG, false)
        this.$store.commit(FORM_MUTATION_TYPES.SET_VALUES_CHILD, {
          key: VALUES_KEYS.WhatKindOfAction,
          value
        })
      }
    },
    color() {
      return this.cannotProgressFlg ? 'red' : ''
    }
  },
  methods: {
    next() {
      if (this.model.length) {
        this.$router.push('Q6')
      } else {
        this.$store.commit(MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG, true)
      }
    }
  }
}
</script>
