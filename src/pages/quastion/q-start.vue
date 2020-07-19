<template>
  <q-page>
    <LeftArticle class="q-pa-md">
      <template v-slot:head>
        次へを押してアンケートを開始してください。
      </template>
    </LeftArticle>

    <single-button to="Q1" body="次へ" />
  </q-page>
</template>

<script>
import { FORM_MUTATION_TYPES } from 'src/store/modules/form'
import LeftArticle from 'layouts/left-article'
import { SingleButton } from '../../components/button'

export default {
  name: 'Q1-description',
  components: {
    LeftArticle,
    SingleButton
  },

  mounted() {
    this.$store.commit(FORM_MUTATION_TYPES.CLEAR_VALUES)
  }
}
</script>
