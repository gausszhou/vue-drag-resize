<template>
  <div class="view-box">
    <div id="toolbar">限制允许拖动的范围</div>
    <div class="container">
      <vue-drag-resize :drag-handle="'.drag-handle'">
        <div class="drag-handle">Drag Only Here</div>
      </vue-drag-resize>
    </div>
  </div>
</template>
