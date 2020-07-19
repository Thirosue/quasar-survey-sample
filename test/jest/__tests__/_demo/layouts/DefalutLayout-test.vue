<template>
  <div>
    <DefaultLayOut :q="q">
      <template v-slot:content>
        {{ content }}
      </template>
    </DefaultLayOut>
  </div>
</template>

<script>
import DefaultLayOut from 'src/layouts/default-layout.vue'

export default {
  name: 'DefaultLayoutTest',
  components: {
    DefaultLayOut
  },
  props: {
    q: {
      type: String
    },
    content: {
      type: String
    }
  }
}
</script>
