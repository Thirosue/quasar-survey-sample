(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{e30b:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DefaultLayOut",{attrs:{q:t.q},scopedSlots:t._u([{key:"content",fn:function(){return[o("RadioForm",{attrs:{options:t.questions.options,bgColor:t.color},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),o("button-group",{attrs:{nextAction:t.next}})]},proxy:!0}])})],1)},n=[],r=(o("ddb0"),o("4360")),u=o("6665"),i=o("e84f"),a=o("3361"),l=o("fbfc"),c=o("153e"),m={name:"Q4-4",components:{RadioForm:a["a"],DefaultLayOut:l["a"],ButtonGroup:c["a"]},data(){return{questions:i["a"].Q4_4}},computed:{q(){return this.getQuestion(this.$router.history.current.meta.title,this.questions.q)},model:{get(){return this.values[u["VALUES_KEYS"].wantToBuy]},set(t){this.$store.commit(r["b"].SET_CANNOT_PROCESSING_FLG,!1),this.$store.commit(u["FORM_MUTATION_TYPES"].SET_VALUES_CHILD,{key:u["VALUES_KEYS"].wantToBuy,value:t})}},color(){return this.cannotProgressFlg?"red":""}},methods:{next(){this.model?this.values[u["VALUES_KEYS"].haveSeen]>0?this.$router.push("Q5"):this.$router.push("Q6"):this.$store.commit(r["b"].SET_CANNOT_PROCESSING_FLG,!0)}}},d=m,h=o("2877"),p=Object(h["a"])(d,s,n,!1,null,null,null);e["default"]=p.exports}}]);