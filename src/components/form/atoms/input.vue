<template>
  <q-input filled v-model="model" :label="label" />
</template>

<script>
export default {
  name: 'c-input',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      required: true
    }
  },
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
