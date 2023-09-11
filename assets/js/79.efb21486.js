(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{498:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"本质-给-html-的-dom-节点加一个不重复-data-属性-形如-data-v-hash-值-来表示他的唯一性-实现-css-的模块私有化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本质-给-html-的-dom-节点加一个不重复-data-属性-形如-data-v-hash-值-来表示他的唯一性-实现-css-的模块私有化"}},[s._v("#")]),s._v(" 本质：给 HTML 的 DOM 节点加一个不重复 data 属性(形如：data-v-hash 值)来表示他的唯一性， 实现 CSS 的模块私有化")]),s._v(" "),t("h3",{attrs:{id:"实现过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现过程"}},[s._v("#")]),s._v(" 实现过程")]),s._v(" "),t("ul",[t("li",[s._v("1、首先 vue-loader 会解析 .vue 组件，提取出 template、script、style 对应的代码块，根据文件路径和文件内容生成 hash 值，并赋给 id ，跟在文件参数后面")]),s._v(" "),t("li",[s._v("2、对于 style 代码块，vue-loader 会在 css-loader 前增加 stylePostLoader，它会给每个选择器增加属性[data-v-hash] ，这里的 hash 值就是上面的 id 值")]),s._v(" "),t("li",[s._v("3、对于 template 的 render 块，vue-loader 的 normalizeComponent 方法，判断如果 vue 文件中有 scoped 的 style，则其返回的 options._ScopedId 为上面的 scopedId；在 vnode 渲染生成 DOM 的时候会在 dom 元素上增增加 scopedId，也就是增加 data-v-hash")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 形如 `id=7ba5bd90` ：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// template")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  render"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  staticRenderFns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./App.vue?vue&type=template&id=7ba5bd90&scoped=true&"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// script")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" script "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./App.vue?vue&type=script&lang=js&"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// style")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" style0 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css&"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"通过样式穿透-可以为子组件修改样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过样式穿透-可以为子组件修改样式"}},[s._v("#")]),s._v(" 通过样式穿透，可以为子组件修改样式")]),s._v(" "),t("ul",[t("li",[s._v("样式穿透：给当前的属性名后面加上当前组件唯一性标识标识，比如[data-v-49729759]")])])])}),[],!1,null,null,null);t.default=n.exports}}]);