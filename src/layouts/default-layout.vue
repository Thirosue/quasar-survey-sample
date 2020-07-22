<template>
  <q-page>
    <div class="content" data-cy="header">
      <div class="q-pa-sm">
        <div class="row justify-start text-h5">
          <div class="s-question self-center" v-html="q" />
        </div>
      </div>
    </div>
    <div class="s-content content" data-cy="content">
      <slot name="content"></slot>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DefaultLayout',
  props: {
    q: {
      type: String
    }
  }
}
</script>
