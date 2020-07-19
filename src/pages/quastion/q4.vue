<template>
  <q-page>
    <LeftArticle class="q-pa-md">
      <template v-slot:head>
        Q4. 「XXX」について、ご覧になってどのように感じましたか。<br />それぞれお知らせください。
      </template>
    </LeftArticle>

    <ButtonGroup to="Q4-1" />
  </q-page>
</template>

<script>
import LeftArticle from 'layouts/left-article'
import { ButtonGroup } from '../../components/button'

export default {
  name: 'Q4-description',
  components: {
    LeftArticle,
    ButtonGroup
  }
}
</script>
