(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{cb08:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DefaultLayOut",{attrs:{q:t.q},scopedSlots:t._u([{key:"content",fn:function(){return[o("RadioForm",{attrs:{options:t.questions.options,bgColor:t.color},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),o("button-group",{attrs:{nextAction:t.next}})]},proxy:!0}])})],1)},r=[],n=(o("ddb0"),o("4360")),i=o("6665"),u=o("e84f"),a=o("3361"),l=o("fbfc"),c=o("153e"),m={name:"Q4-3",components:{RadioForm:a["a"],DefaultLayOut:l["a"],ButtonGroup:c["a"]},data(){return{questions:u["a"].Q4_3}},computed:{q(){return this.getQuestion(this.$router.history.current.meta.title,this.questions.q)},model:{get(){return this.values[i["VALUES_KEYS"].impressive]},set(t){this.$store.commit(n["b"].SET_CANNOT_PROCESSING_FLG,!1),this.$store.commit(i["FORM_MUTATION_TYPES"].SET_VALUES_CHILD,{key:i["VALUES_KEYS"].impressive,value:t})}},color(){return this.cannotProgressFlg?"red":""}},methods:{next(){this.model?this.$router.push("Q4-4"):this.$store.commit(n["b"].SET_CANNOT_PROCESSING_FLG,!0)}}},d=m,p=o("2877"),_=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=_.exports}}]);