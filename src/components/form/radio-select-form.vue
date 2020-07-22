<template>
  <div>
    <EvenlyArticle>
      <template v-slot:head>
        <slot name="head"></slot>
      </template>
      <template v-slot:body>
        <div class="q-gutter-sm">
          <q-radio v-model="radioModelValue" :val="noneValue" :label="noneLabel" />
          <q-radio v-model="radioModelValue" :val="existValue" :label="existLabel" />
          <q-select
            v-if="radioModel === existValue"
            filled
            v-model="selectModelValue"
            :options="options"
            :label="selectLabel"
          />
        </div>
      </template>
    </EvenlyArticle>
    <div v-if="bgColor === 'red'">
      <div class="content">
        <div class="q-pa-md">
          <div class="row justify-start text-h7">
            <div class="q-validation-error self-center">
              <font color="red">選択してください。</font>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EvenlyArticle from '../../layouts/evenly-article'

export default {
  name: 'RadioSelectForm',
  components: {
    EvenlyArticle
  },
  props: {
    radioModel: {
      type: String,
      default: ''
    },
    selectModel: {
      type: Object,
      default: undefined
    },
    noneValue: {
      type: String,
      default: '無し'
    },
    noneLabel: {
      type: String,
      default: '無し'
    },
    existLabel: {
      type: String,
      default: 'あり'
    },
    existValue: {
      type: String,
      default: 'あり'
    },
    selectLabel: {
      type: String,
      default: 'いつから'
    },
    options: Array,
    bgColor: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    selectModelValue: {
      get() {
        return this.selectModel
      },
      set(value) {
        console.log(value)
        this.$emit('selectModelMethod', value)
      }
    },
    radioModelValue: {
      get() {
        return this.radioModel
      },
      set(value) {
        console.log(value)
        this.$emit('radioModelMethod', value)
      }
    }
  }
}
</script>
