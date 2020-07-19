<template>
  <div>
    <RadioForm :bgColor="color" :options="inputs" v-model="model" />
  </div>
</template>

<script>
import RadioForm from 'src/components/form/radio-form.vue'

export default {
  name: 'RadioFormTest',
  components: {
    RadioForm
  },
  props: {
    inputs: {
      type: Array
      // [
      //   { label: '選択肢1', value: '1' },
      //   { label: '選択肢2', value: '2' },
      //   { label: '選択肢3', value: '3' }
      // ],
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
