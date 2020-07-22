<template>
  <q-btn
    class="secondary-btn"
    color="grey-5"
    text-color="black"
    size="22px"
    style="width: 120px"
    @click="click"
    push
  >
    <div class="row items-center no-wrap">
      <div class="text-center">
        <slot name="body"></slot>
      </div>
    </div>
  </q-btn>
</template>

<script>
export default {
  name: 'SecondaryButton',
  props: {
    click: {
      type: Function,
      required: false
    }
  }
}
</script>
