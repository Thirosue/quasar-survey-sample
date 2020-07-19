<template>
  <div>
    <DefaultLayOut :q="q">
      <template v-slot:content>
        <CheckListForm :bgColor="color" :options="questions.options" v-model="model" />
        <CustomInput v-if="hasOther" v-model="otherText" label="その他" />
        <button-group :nextAction="next" />
      </template>
    </DefaultLayOut>
  </div>
</template>

<script>
import { MUTATION_TYPES } from 'src/store'
import { VALUES_KEYS, FORM_MUTATION_TYPES } from 'src/store/modules/form'
import Questions from 'src/const/questions'
import CustomInput from 'components/form/atoms/input'
import CheckListForm from 'components/form/checklist-form'
import DefaultLayOut from '../../layouts/default-layout.vue'
import { ButtonGroup } from '../../components/button'

export default {
  name: 'Q3',
  components: {
    CustomInput,
    CheckListForm,
    DefaultLayOut,
    ButtonGroup
  },
  data() {
    return {
      questions: Questions.Q3
    }
  },
  computed: {
    q() {
      return this.getQuestion(this.$router.history.current.meta.title, this.questions.q)
    },
    model: {
      get() {
        return this.values[VALUES_KEYS.impression]
      },
      set(value) {
        this.$store.commit(MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG, false)
        this.$store.commit(FORM_MUTATION_TYPES.SET_VALUES_CHILD, {
          key: VALUES_KEYS.impression,
          value
        })
      }
    },
    otherText: {
      get() {
        return this.values[VALUES_KEYS.impressionText]
      },
      set(value) {
        this.$store.commit(FORM_MUTATION_TYPES.SET_VALUES_CHILD, {
          key: VALUES_KEYS.impressionText,
          value
        })
      }
    },
    hasOther() {
      return this.model.some(data => data === '99')
    },
    color() {
      return this.cannotProgressFlg ? 'red' : ''
    }
  },
  methods: {
    next() {
      if (this.model.length) {
        if (!this.hasOther) {
          // その他をクリア
          this.$store.commit(FORM_MUTATION_TYPES.SET_VALUES_CHILD, {
            key: VALUES_KEYS.impressionText,
            value: null
          })
        }
        this.$router.push('Q4')
      } else {
        this.$store.commit(MUTATION_TYPES.SET_CANNOT_PROCESSING_FLG, true)
      }
    }
  }
}
</script>
