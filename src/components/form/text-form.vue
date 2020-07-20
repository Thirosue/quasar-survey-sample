<template>
  <LeftArticle>
    <template v-slot:head>
      <slot name="head"></slot>
    </template>
    <template v-slot:body>
      <div class="fit">
        <q-input v-model="model" :bg-color="bgColor" :label="label" />
      </div>
    </template>
  </LeftArticle>
</template>

<script>
import LeftArticle from '../../layouts/left-article'

export default {
  name: 'TextForm',
  components: {
    LeftArticle
  },
  props: {
    bgColor: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: true,
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
