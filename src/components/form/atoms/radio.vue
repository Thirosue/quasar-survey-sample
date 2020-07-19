<template>
  <div class="q-gutter-sm">
    <q-radio
      v-model="model"
      v-for="option in options"
      :val="option.value"
      :label="option.label"
      :key="option.label"
    />
  </div>
</template>

<script>
export default {
  name: 'c-radio',
  props: {
    options: {
      type: Array,
      required: true
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
