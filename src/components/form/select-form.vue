<template>
  <LeftArticle>
    <template v-slot:body>
      <div class="fit" data-cy="select">
        <q-select
          filled
          :label="label"
          v-model="model"
          input-debounce="0"
          :options="options"
          :bg-color="bgColor"
        />
      </div>
    </template>
  </LeftArticle>
</template>

<script>
import LeftArticle from '../../layouts/left-article'

export default {
  name: 'SelectForm',
  components: {
    LeftArticle
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    bgColor: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      default: '選択してください'
    },
    value: {
      required: true
    }
  },
  watch: {},
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
