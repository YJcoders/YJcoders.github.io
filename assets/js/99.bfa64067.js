(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{533:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("p",[s._v("通过ES6模块的静态特性，在编译时确定依赖关系，消除未使用的代码")]),s._v(" "),a("p",[s._v("DCE特性：（dead code elimination）")]),s._v(" "),a("ul",[a("li",[s._v("代码不可到达，不会被执行")]),s._v(" "),a("li",[s._v("代码执行的结果不会被用到")]),s._v(" "),a("li",[s._v("代码中的变量只写不读\nES Module特性：")]),s._v(" "),a("li",[s._v("静态模块")]),s._v(" "),a("li",[s._v("只能作为模块顶层的语句出现")]),s._v(" "),a("li",[s._v("import 的模块名只能是字符串常量")]),s._v(" "),a("li",[s._v("依赖关系是确定的，和运行时的状态无关")])]),s._v(" "),a("h3",{attrs:{id:"在webpack中工作过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在webpack中工作过程"}},[s._v("#")]),s._v(" 在webpack中工作过程")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Make 阶段，收集模块的导出变量并记录到模块依赖关系图 ModuleGraph 变量中\n\nSeal 阶段，遍历 ModuleGraph ，标记未被使用的模块\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 标记（"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* unused harmony export square */")]),s._v("）未使用到的代码\n\n生成chunk阶段，被标记 无用的模块 被删除掉\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 通过Terser、UglifyJS等工具，删除被标记为无用的代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);