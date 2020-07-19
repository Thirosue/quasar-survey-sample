<template>
  <div class="button_wrapper q-mt-lg">
    <span class="q-mr-sm">
      <SecondaryButton :click="backAction" data-cy="back">
        <template v-slot:body>
          {{ backText }}
        </template>
      </SecondaryButton>
    </span>
    <span class="q-ml-sm">
      <PrimaryButton :to="to" :click="nextAction" data-cy="next">
        <template v-slot:body>
          {{ nextText }}
        </template>
      </PrimaryButton>
    </span>
  </div>
</template>

<script>
import PrimaryButton from './primary-button.vue'
import SecondaryButton from './secondary-button.vue'

export default {
  name: 'ButtonGroup',
  components: {
    PrimaryButton,
    SecondaryButton
  },
  props: {
    nextAction: {
      type: Function,
      required: false,
      default: () => {}
    },
    backAction: {
      type: Function,
      required: false,
      default: () => window.history.back()
    },
    to: {
      type: String
    },
    nextText: {
      type: String,
      required: false,
      default: '次へ'
    },
    backText: {
      type: String,
      required: false,
      default: '戻る'
    }
  }
}
</script>

<style scoped>
.button_wrapper {
  text-align: center;
}
</style>
