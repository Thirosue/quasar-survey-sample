<template>
  <div>
    <DefaultLayOut :q="q">
      <template v-slot:content>
        <SelectForm v-model="model" :options="questions.options" :bgColor="color" />
        <button-group :nextAction="next" />
      </template>
    </DefaultLayOut>
  </div>
</template>

<script>
import { MUTATION_TYPES } from 'src/store'
import { VALUES_KEYS, FORM_MUTATION_TYPES } from 'src/store/modules/form'
import Questions from 'src/const/questions'
import SelectForm from 'components/form/select-form'
import DefaultLayOut from '../../layouts/default-layout.vue'
import { ButtonGroup } from '../../components/button'

export default {
  name: 'Q8',
  components: {
    SelectForm,
    DefaultLayOut,
    ButtonGroup
  },
  data() {
    return {
      questions: Questions.Q8
    }
  },
  computed: {
    q() {
      return this.getQuestion(this.$router.history.current.meta.title, this.questions.q)
    },
    model: {
      get() {
        return this.questions.options.find(e => e.value === this.values[VALUES_KEYS.prefectures])
      },
      set(e) {
        this.$store.commit(MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG, false)
        this.$store.commit(FORM_MUTATION_TYPES.SET_VALUES_CHILD, {
          key: VALUES_KEYS.prefectures,
          value: e ? e.value : null
        })
      }
    },
    color() {
      return this.cannotProgressFlg ? 'red' : ''
    }
  },
  methods: {
    next() {
      if (this.model) {
        this.$router.push('confirm')
      } else {
        this.$store.commit(MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG, true)
      }
    }
  }
}
</script>
