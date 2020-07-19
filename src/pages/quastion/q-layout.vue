<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <q-footer v-if="showProgress">
      <linearProgress :currentNumber="currentQuestionNumber" :maxNumber="12" />
    </q-footer>
  </q-layout>
</template>

<script>
import linearProgress from 'src/components/progress/linear-progress'

export default {
  name: 'Layout',

  components: {
    linearProgress
  },

  data() {
    return {
      step: ''
    }
  },
  methods: {
    toTop() {
      this.$router.push('/')
    },
    stepSet() {
      return this.$route.path
    }
  },
  computed: {
    showProgress() {
      return this.$route.path !== '/question/result'
    },
    currentQuestionNumber() {
      switch (this.$route.path) {
        case '/':
          return 0
        case '/Q1':
          return 1
        case '/Q2':
          return 2
        case '/Q3':
          return 3
        case '/Q4':
          return 3
        case '/Q4-1':
          return 4
        case '/Q4-2':
          return 5
        case '/Q4-3':
          return 6
        case '/Q4-4':
          return 7
        case '/Q5':
          return 8
        case '/Q6':
          return 9
        case '/Q7':
          return 10
        case '/Q8':
          return 11
        case '/confirm':
          return 12
        default:
          return 0
      }
    }
  }
}
</script>
