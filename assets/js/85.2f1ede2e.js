(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{505:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"vue-为什么不能挂载在-body、html-这样的根节点上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-为什么不能挂载在-body、html-这样的根节点上"}},[s._v("#")]),s._v(" Vue 为什么不能挂载在 body、html 这样的根节点上")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("因为 vue2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x 之后，最终生成的dom 挂载的时候，实际上是替换 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 这个dom节点，\n如果挂载在body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 或者html，就把他们替换了，\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"v-if-和-v-show-的区别-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if-和-v-show-的区别-使用场景"}},[s._v("#")]),s._v(" v-if 和 v-show 的区别？使用场景？")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("：是通过控制dom的存在与否来控制显示隐藏\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("show：是通过控制dom的样式 display属性，控制显示与否\n\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("：只有当条件满足才会渲染，\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("show：是不管是否为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("，都会渲染\n\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("：切换时，有一个局部编译"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("卸载过程，只有在第一次为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("时会编译，并且编译会被缓存\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("show：任何情况下都会直接编译，不会被缓存\n\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("有更高的切换消耗；v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("show有更高的初始渲染消耗\n如果需要非常频繁地切换，则使用 v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("show 较好；如果在运行时条件很少改变，则使用 v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" 较好。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixins"}},[s._v("#")]),s._v(" mixins")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、data，methods中，如果key值重复，以页面为准\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、mixins中的created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mounted优先于页面先执行\n执行顺序 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mx created "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" page created "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mx mounted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" page mounted\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"为什么-vue-组件中-data-必须是一个函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-vue-组件中-data-必须是一个函数"}},[s._v("#")]),s._v(" 为什么 vue 组件中 data 必须是一个函数？")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("对象为引用类型，当复用组件时，由于数据对象都指向同一个data对象，当在一个组件中修改data时，其他重用的组件中的data会同时被修改；\n而使用返回对象的函数，由于每次返回的都是一个新对象，引用地址不同，则不会出现这个问题\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);