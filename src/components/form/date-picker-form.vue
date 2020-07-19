<template>
  <LeftArticle>
    <template v-slot:head>
      <slot name='head'></slot>
    </template>
    <template v-slot:body>
      <div class="q-pa-md" style="max-width: 300px">
        <q-input filled v-model="model" :label="label" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="model" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </template>
  </LeftArticle>
</template>

<script>
import LeftArticle from '../../layouts/left-article'

export default {
  name: 'DatePickerForm',
  components: {
    LeftArticle
  },
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    value: {
      required: true
    }
  },

  mounted () {
    this.mounted = this.init
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        console.log(value)
        this.$emit('input', value)
      }
    }
  }
}
</script>
