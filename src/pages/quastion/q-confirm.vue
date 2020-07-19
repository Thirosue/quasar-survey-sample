<template>
  <q-page>
    <LeftArticle>
      <template v-slot:head>
        最後に
      </template>
      <template v-slot:body>
        ご協力ありがとうございました。
        サポートへのご要望やアンケートへの質問があればご記載ください。
        何もなければ空欄のまま送信ボタンを押してください。
        <q-input class="fit q-mt-md" v-model="model" outlined type="textarea" />
      </template>
    </LeftArticle>
    <div class="q-mt-sm">
      <button-group :nextAction="next" nextText="送信" />
    </div>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
import { VALUES_KEYS, FORM_MUTATION_TYPES } from 'src/store/modules/form'
import LeftArticle from '../../layouts/left-article'
import { ButtonGroup } from '../../components/button'

export default {
  name: 'confirm',
  components: {
    LeftArticle,
    ButtonGroup
  },
  computed: {
    model: {
      get() {
        return this.values[VALUES_KEYS.freeComment]
      },
      set(e) {
        this.$store.commit(FORM_MUTATION_TYPES.SET_VALUES_CHILD, {
          key: VALUES_KEYS.freeComment,
          value: e
        })
      }
    }
  },

  data() {
    return {}
  },
  methods: {
    async next() {
      Loading.show()
      this.$router.push('result')
      Loading.hide()
    }
  }
}
</script>
