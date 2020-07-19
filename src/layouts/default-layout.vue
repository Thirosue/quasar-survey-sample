<template>
  <q-page>
    <div class="content" data-cy="main">
      <div class="q-pa-sm">
        <div class="row justify-start text-h5">
          <div class="self-center" v-html="q" />
        </div>
      </div>
    </div>
    <slot name="content"></slot>
  </q-page>
</template>

<script>
export default {
  name: 'DefaultLayout',
  props: {
    q: {
      type: String,
      required: true
    }
  }
}
</script>
