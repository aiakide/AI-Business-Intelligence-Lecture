<script setup lang="ts">
interface Source {
  title: string
  url?: string
  year?: string
}

const props = defineProps<{
  // Single-source props
  title?: string
  url?: string
  year?: string
  // Multi-source prop
  sources?: Source[]
}>()

const list: Source[] =
  props.sources && props.sources.length
    ? props.sources
    : props.title
      ? [{ title: props.title, url: props.url, year: props.year }]
      : []
</script>

<template>
  <div class="literatur-source">
    <span class="label">Quelle{{ list.length > 1 ? 'n' : '' }}:</span>
    <span
      v-for="(s, i) in list"
      :key="i"
      class="entry"
    >
      <a v-if="s.url" :href="s.url" target="_blank" rel="noopener">{{ s.title }}</a>
      <span v-else>{{ s.title }}</span>
      <template v-if="s.year"> ({{ s.year }})</template>
      <template v-if="i < list.length - 1"> · </template>
    </span>
  </div>
</template>

<style scoped>
.literatur-source {
  position: absolute;
  bottom: 2.5rem;
  left: 2rem;
  right: 2rem;
  font-size: 0.55rem;
  line-height: 1.3;
  color: #909090;
}
.literatur-source .label {
  font-weight: 500;
  margin-right: 0.35rem;
}
.literatur-source a {
  color: var(--slidev-theme-primary);
  text-decoration: none;
  border-bottom: none;
}
.literatur-source a:hover {
  text-decoration: underline;
}
</style>
