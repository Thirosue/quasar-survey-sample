<template>
  <div>
    <PrimaryButton :click="increment" :width="width" data-cy="next">
      <template v-slot:body>
        {{ content }}
      </template>
    </PrimaryButton>
  </div>
</template>

<script>
import PrimaryButton from 'src/components/button/primary-button.vue'

export default {
  name: 'PrimaryButtomTest',
  components: {
    PrimaryButton
  },
  props: {
    content: {
      type: String
    },
    width: {
      type: Number
    }
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    }
  }
}
</script>
