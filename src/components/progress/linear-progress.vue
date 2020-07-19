<template>
  <div class="q-pa-md">
    <q-linear-progress size="50px" :value="progress" color="positive" class="q-mt-sm">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="positive" :label="progressLabel" />
      </div>
    </q-linear-progress>
  </div>
</template>

<script>
export default {
  name: 'LinearProgress',
  props: {
    currentNumber: Number,
    maxNumber: Number
  },
  computed: {
    progress () {
      return (this.currentNumber / this.maxNumber)
    },
    progressLabel () {
      return `${this.currentNumber} / ${this.maxNumber}`
    }
  }
}
</script>
