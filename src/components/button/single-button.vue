<template>
  <div class="button_wrapper">
    <PrimaryButton :click="nextAction" :width="width" :to="to" data-cy="next">
      <template v-slot:body>
        {{ body }}
      </template>
    </PrimaryButton>
  </div>
</template>

<script>
import PrimaryButton from './primary-button.vue'

export default {
  name: 'SingleButton',
  components: {
    PrimaryButton
  },
  props: {
    body: {
      type: String,
      required: true
    },
    nextAction: {
      type: Function,
      default: () => {}
    },
    width: {
      type: Number,
      default: 120
    },
    to: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.button_wrapper {
  text-align: center;
}
</style>
