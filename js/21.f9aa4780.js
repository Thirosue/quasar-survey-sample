(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"7fc6":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-page",[t("LeftArticle",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v("\n      ご回答ありがとうございました。\n    ")]},proxy:!0},{key:"body",fn:function(){return[t("div",{staticClass:"q-pa-md"},[t("q-table",{attrs:{title:"回答結果",data:e.rows,"row-key":"name","rows-per-page-options":[0],"hide-bottom":""}})],1)]},proxy:!0}])}),t("single-button",{attrs:{to:"/",width:200,body:"最初に戻る"}})],1)},o=[],a=(t("ddb0"),t("15a3")),i=t("153e"),r=t("e84f"),u=t("6665");function l(e,s){const t=e.filter(e=>e.value===s)[0];return t?t.label:""}function p(e,s){return s.map(s=>l(e,s)).join(", ")}var S={name:"result",components:{LeftArticle:a["a"],SingleButton:i["b"]},computed:{rows(){return[{No:"1",question:r["a"].Q1.q,answer:l(r["a"].Q1.options,this.values[u["VALUES_KEYS"].haveSeen])},{No:"2",question:r["a"].Q2.q,answer:p(r["a"].Q2.options,this.values[u["VALUES_KEYS"].trigger])},{No:"2'",question:r["a"].Q3.q,answer:this.values[u["VALUES_KEYS"].triggerText]},{No:"3",question:r["a"].Q3.q,answer:p(r["a"].Q3.options,this.values[u["VALUES_KEYS"].impression])},{No:"3'",question:r["a"].Q3.q,answer:this.values[u["VALUES_KEYS"].impressionText]},{No:"4-1",question:r["a"].Q4_1.q,answer:l(r["a"].Q4_1.options,this.values[u["VALUES_KEYS"].understand])},{No:"4-2",question:r["a"].Q4_2.q,answer:l(r["a"].Q4_2.options,this.values[u["VALUES_KEYS"].interested])},{No:"4-3",question:r["a"].Q4_3.q,answer:l(r["a"].Q4_3.options,this.values[u["VALUES_KEYS"].impressive])},{No:"4-4",question:r["a"].Q4_4.q,answer:l(r["a"].Q4_4.options,this.values[u["VALUES_KEYS"].wantToBuy])},{No:"5",question:r["a"].Q5.q,answer:p(r["a"].Q5.options,this.values[u["VALUES_KEYS"].WhatKindOfAction])},{No:"6",question:r["a"].Q6.q,answer:l(r["a"].Q6.options,this.values[u["VALUES_KEYS"].sex])},{No:"7",question:r["a"].Q7.q,answer:l(r["a"].Q7.options,this.values[u["VALUES_KEYS"].age])},{No:"8",question:r["a"].Q8.q,answer:l(r["a"].Q8.options,this.values[u["VALUES_KEYS"].prefectures])},{No:"-",question:"フリーコメント",answer:this.values[u["VALUES_KEYS"].freeComment]}]}}},q=S,E=t("2877"),w=t("9989"),Q=t("eaac"),_=t("eebe"),c=t.n(_),v=Object(E["a"])(q,n,o,!1,null,null,null);s["default"]=v.exports;c()(v,"components",{QPage:w["a"],QTable:Q["a"]})}}]);