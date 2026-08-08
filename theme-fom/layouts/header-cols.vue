<template>
  <div class="slidev-layout header-cols">
    <div class="header-area">
      <slot name="header" />
      <slot name="default" />
    </div>
    <div class="cols-container">
      <div class="col-left">
        <slot name="left" />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-cols {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header-area {
  width: 100%;
  margin-bottom: 1rem;
}

.header-area :deep(h1),
.header-area :deep(h2) {
  margin-top: 0;
}

.cols-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
  align-items: start;
}

.col-left,
.col-right {
  height: 100%;
  min-width: 0;
}
</style>
