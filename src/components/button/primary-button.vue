<template>
  <q-btn class="primary-btn" color="primary" :to="to" size="22px" :style="styleAttr" @click="click" push>
    <div class="row items-center no-wrap">
      <div class="text-center">
        <slot name="body"></slot>
      </div>
    </div>
  </q-btn>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    click: {
      type: Function,
      required: false
    },
    width: {
      type: Number,
      default: 120
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    styleAttr() {
      return `width: ${this.width}px`
    }
  }
}
</script>
