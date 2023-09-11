(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{523:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"webpack-和-grunt-gulp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-和-grunt-gulp"}},[s._v("#")]),s._v(" webpack 和 grunt/gulp")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grunt和gulp是早期的打包工具 基于任务运行和工作流 遍历源文件 -> 匹配规则 -> 打包\nwebpack是基于模块化，通过entry入口配置文件，按依赖递归查到打包\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"webpack-和-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-和-rollup"}},[s._v("#")]),s._v(" webpack 和 rollup")]),s._v(" "),a("p",[s._v("rollup 推荐使用 ES6 Module 方式，支持 tree shaking，浏览器也支持（浏览器只有 2 种方法支持引入 js 模块，script 标签，ESM 模块）\nrollup 比较适合打包 js 库（react、vue 等的源代码库都是 rollup 打包的）\nrollup 可以支持 esm 和 cjs、umd、amd cjs 需要使用插件 @rollup/plugin-commonjs\nrollup 打出来的包体积小，包结构清晰（不用像 webpack 一样，用 iife + function 包裹模块），几乎无额外代码注入")]),s._v(" "),a("h3",{attrs:{id:"webpack-和-vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-和-vite"}},[s._v("#")]),s._v(" webpack 和 vite")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("构建速度： vite的构建速度比webpack快\nvite利用了浏览器对ES6模块的支持，避免了编译的大量时间，直接以ESM方式提供源码,只需要在浏览器请求源码时进行转换并按需提供源码\nwebpack则需要对所有的模块进行编译\n在开发模式下，vite使用esbuild，esbuild使用go语言，执行效率更高；\n在生产模式下，vite使用rollup打包，提供更好的tree-shaking、代码压缩和性能优化\n\n\n配置： Webpack需要通过复杂的配置来管理各种不同的loader、插件、代码分割和优化设置\nVite的默认配置非常简单，只需要少量配置即可 生态： Webpack 的插件生态非常丰富\nVite 更注重在原生支持不同框架和库上，它采用了一种基于 Rollup\n的插件设计，可以很容易地集成不同的前端框架和库\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);