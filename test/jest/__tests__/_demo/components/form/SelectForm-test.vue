<template>
  <div>
    <SelectForm :label="label" :bgColor="color" :options="inputs" v-model="model" />
  </div>
</template>

<script>
import SelectForm from 'src/components/form/select-form.vue'

export default {
  name: 'SelectFormTest',
  components: {
    SelectForm
  },
  props: {
    label: {
      type: String
    },
    inputs: {
      type: Array
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      model: null
    }
  }
}
</script>
