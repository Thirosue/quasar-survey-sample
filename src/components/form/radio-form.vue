<template>
  <div>
    <LeftArticle>
      <template v-slot:body>
        <div class="fit">
          <q-option-group :options="options" type="radio" v-model="model" />
        </div>
      </template>
    </LeftArticle>
    <div v-if="bgColor === 'red'">
      <div class="content">
        <div class="q-pa-md">
          <div class="row justify-start text-h7">
            <div class="self-center">
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

export default {
  name: 'RadioForm',
  components: {
    LeftArticle
  },
  props: {
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
