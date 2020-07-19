<template>
  <div>
    <LeftArticle>
      <template v-slot:head>
        <slot name="head"></slot>
      </template>
      <template v-slot:body>
        <div class="q-gutter-sm">
          <q-option-group :options="options" :label="label" type="checkbox" v-model="model" />
        </div>
      </template>
    </LeftArticle>
    <div>
      <div class="content">
        <div class="q-pa-md">
          <div class="row justify-start text-h7">
            <div v-if="bgColor === 'red'" class="self-center">
              <font color="red">選択してください。</font>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftArticle from '../../layouts/left-article'

export default {
  name: 'ChecklistForm',
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
      default: ''
    },
    value: {
      required: true
    },
    // 他の選択肢と排他な値
    disableValue: {
      required: false,
      default: null
    }
  },
  mounted() {
    console.log(this.int)
    this.mounted = this.int
  },
  watch: {},
  methods: {
    handleDisable(value) {
      let res = value
      if (this.disableValue) {
        if (value.includes(this.disableValue)) {
          // 該当なし等の値が入っていた場合、その値以外のチェックを外し、非活性にする。
          this.options
            .filter(o => o.value !== this.disableValue)
            .forEach(o => {
              o.disable = true
            })
          res = [this.disableValue]
        } else {
          // 該当なし等の値が入っていない場合、活性化させる。
          this.options.forEach(o => {
            o.disable = false
          })
        }
      }
      return res
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        value = this.handleDisable(value)
        this.$emit('input', value)
      }
    }
  }
}
</script>
