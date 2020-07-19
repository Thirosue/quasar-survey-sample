<template>
  <div>
    <DefaultLayOut :q="q">
      <template v-slot:content>
        <RadioForm :bgColor="color" :options="questions.options" v-model="model" />
        <button-group :nextAction="next" />
      </template>
    </DefaultLayOut>
  </div>
</template>

<script>
import { MUTATION_TYPES } from 'src/store'
import { VALUES_KEYS, FORM_MUTATION_TYPES } from 'src/store/modules/form'
import Questions from 'src/const/questions'
import RadioForm from 'components/form/radio-form'
import DefaultLayOut from '../../layouts/default-layout.vue'
import { ButtonGroup } from '../../components/button'

export default {
  name: 'Q6',
  components: {
    RadioForm,
    DefaultLayOut,
    ButtonGroup
  },
  data() {
    return {
      questions: Questions.Q6
    }
  },
  computed: {
    q() {
      return this.getQuestion(this.$router.history.current.meta.title, this.questions.q)
    },
    model: {
      get() {
        return this.values[VALUES_KEYS.sex]
      },
      set(value) {
        this.$store.commit(MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG, false)
        this.$store.commit(FORM_MUTATION_TYPES.SET_VALUES_CHILD, {
          key: VALUES_KEYS.sex,
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
      if (this.model) {
        this.$router.push('Q7')
      } else {
        this.$store.commit(MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG, true)
      }
    }
  }
}
</script>
