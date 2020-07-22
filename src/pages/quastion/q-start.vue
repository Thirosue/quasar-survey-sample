<template>
  <DefaultLayOut>
    <template v-slot:content>
      <div class="row justify-start text-h6">
        <div class="s-top-message self-center">
          次へを押してアンケートを開始してください。
        </div>
      </div>
      <single-button to="Q1" body="次へ" />
    </template>
  </DefaultLayOut>
</template>

<script>
import { FORM_MUTATION_TYPES } from 'src/store/modules/form'
import DefaultLayOut from '../../layouts/default-layout.vue'
import { SingleButton } from '../../components/button'

export default {
  name: 'Q1-description',
  components: {
    DefaultLayOut,
    SingleButton
  },

  mounted() {
    this.$store.commit(FORM_MUTATION_TYPES.CLEAR_VALUES)
  }
}
</script>
