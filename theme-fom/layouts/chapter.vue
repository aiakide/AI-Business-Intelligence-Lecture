<template>
  <div class="slidev-layout chapter">
    <div class="left title">
      <slot name="left" />
    </div>
    <div class="right image">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.chapter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 0px;
}
.title {
  width: 50%;
}
.title :deep(h1) {
  color: #0b1215;
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.1;
}
.image {
  width: 50%;
}
.image :deep(img) {
  width: 100%;
}
</style>
