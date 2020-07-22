<template>
  <div>
    <LeftArticle>
      <template v-slot:head>
        <div v-html="q" />
      </template>
      <template v-slot:body>
        <div class="fit">
          <CustomRadio :options="options" v-model="model" />
        </div>
      </template>
    </LeftArticle>
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
import LeftArticle from '../../layouts/left-article'
import CustomRadio from 'components/form/atoms/radio'

export default {
  name: 'RadioForm',
  components: {
    LeftArticle,
    CustomRadio
  },
  props: {
    q: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    bgColor: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      required: true
    }
  },
  watch: {},
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
