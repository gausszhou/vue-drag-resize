# vue-drag-resize

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE) [![Npm Package](https://img.shields.io/npm/v/@gausszhou/vue-drag-resize.svg)](https://www.npmjs.com/package/@gausszhou/vue-drag-resize)

## About

> beta version

## Live Demo

[中文在线演示地址](https://gausszhou.github.io/vue-drag-resize)

## Quick Start

```shell
npm install  @gausszhou/vue-drag-resize
```

```js
// 引入全局自定义组件
import VueDragResize from "@gausszhou/vue-drag-resize"
Vue.component('vue-drag-resize', VueDragResize) 
```

```vue
<template>
  <div class="view-box">
    <div id="toolbar">基本组件</div>
    <div class="container">
      <vue-drag-resize :x="0" :y="0" :w="200" :h="200">
        <p>你可以拖着我，按照自己的意愿调整大小。1</p>
      </vue-drag-resize>
      <vue-drag-resize :x="200" :y="200" :w="200" :h="200">
        <p>你可以拖着我，按照自己的意愿调整大小。2</p>
      </vue-drag-resize>
    </div>
  </div>
</template>
```

## Code Reference

```shell
https://github.com/mauricius/vue-draggable-resizable
https://github.com/gorkys/vue-draggable-resizable-gorkys
https://github.com/tmrcui/vue-draggable-resizable-rotatable
https://github.com/gausszhou/vue-drag-resize-rotate
```