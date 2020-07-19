/* eslint-disable */
import { mapGetters } from 'vuex'
import { GETTER_TYPES } from 'src/store'
import { FORM_GETTER_TYPES } from 'src/store/modules/form'

export default ({ app, router, store, Vue }) => {
    Vue.mixin({
        beforeRouteLeave(to, from, next) {
            next()
        },
        computed: {
            ...mapGetters({
                values: FORM_GETTER_TYPES.VALUES,
                cannotProgressFlg: GETTER_TYPES.GET_CANNOT_PROCESSING_FLG
            })
        },
        methods: {
            getQuestion(number, questions) {
                return number + '. ' + questions
            }
        },
    })
}
