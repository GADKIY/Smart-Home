(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-views-members-vue"],{a033:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"members"},[t("h2",{staticClass:"members_title"},[s._v("Members")]),t("div",{staticClass:"members_cards-list_wrap"},[t("ul",{staticClass:"members_cards-list"},s._l(s.members,(function(e){return t("li",{key:e.id,staticClass:"members_card"},[t("div",{staticClass:"members_card-inner--upper"},[t("div",{staticClass:"members_card-avatar"},[t("v-svg",{attrs:{sprite:e.avatar}})],1),t("div",{staticClass:"members_card-name"},[s._v(" "+s._s(e.name)+" ")]),t("div",{staticClass:"members_card-owner"},[s._v(" "+s._s(e.position)+" ")])]),t("div",{staticClass:"members_card-inner--lower"},[t("div",{staticClass:"members_owner-status"},[s._v(" Status: "+s._s(e.status)+" ")]),t("div",{staticClass:"members_room"},[s._v(" "+s._s(e.location)+" ")])])])})),0)])])},r=[],i=t("bc3a"),m=t.n(i),n={name:"members",data:function(){return{members:[]}},created:function(){var s=this;m.a.get("data/members.json").then((function(e){s.members=e.data}))}},c=n,l=(t("e1d3"),t("2877")),d=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=d.exports},e1d3:function(s,e,t){"use strict";t("e77e")},e77e:function(s,e,t){}}]);
//# sourceMappingURL=layout-views-members-vue.b781e88e.js.map