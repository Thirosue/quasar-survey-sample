<template>
  <DefaultLayOut
    q="Q4. 「XXX」について、ご覧になってどのように感じましたか。<br />それぞれお知らせください。"
  >
    <template v-slot:content>
      <ButtonGroup to="Q4-1" />
    </template>
  </DefaultLayOut>
</template>

<script>
import DefaultLayOut from '../../layouts/default-layout.vue'
import { ButtonGroup } from '../../components/button'

export default {
  name: 'Q4-description',
  components: {
    DefaultLayOut,
    ButtonGroup
  }
}
</script>
