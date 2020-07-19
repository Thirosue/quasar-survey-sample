<template>
  <div>
    <RadioSelectForm
      :radioModel="radioModel"
      :selectModel="selectModel"
      @radioModelMethod="setRadio"
      @selectModelMethod="setSelect"
      :options="options"
      :noneLabel="noneLabel"
      :noneValue="noneValue"
      :existLabel="existLabel"
      :existValue="existValue"
      :selectLabel="selectLabel"
      :bgColor="color"
    >
    </RadioSelectForm>
  </div>
</template>

<script>
import RadioSelectForm from 'src/components/form/radio-select-form.vue'

export default {
  name: 'RadioFormTest',
  components: {
    RadioSelectForm
  },
  props: {
    noneValue: {
      type: String,
      default: '無し'
    },
    noneLabel: {
      type: String,
      default: '無し'
    },
    existValue: {
      type: String,
      default: 'あり'
    },
    existLabel: {
      type: String,
      default: 'あり'
    },
    selectLabel: {
      type: String,
      default: 'いつから'
    },
    options: Array,
    color: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      radioModel: '',
      selectModel: null
    }
  },
  methods: {
    setRadio(ans) {
      if (ans === '0') this.selectModel = null
      this.radioModel = ans
    },
    setSelect(ans) {
      this.selectModel = ans
    }
  }
}
</script>
