<script setup lang="ts">
import { computed } from 'vue'
import { parseSources } from '../composables/useSources'
// Import the deck source at build time and parse every <LiteraturSource> out of
// it — deterministic, independent of slide mount order.
import rawSlides from '../../slides.md?raw'

const sources = computed(() => parseSources(rawSlides as string))
</script>

<template>
  <div class="literaturverzeichnis">
    <ol>
      <li v-for="(s, i) in sources" :key="i">
        <a v-if="s.url" :href="s.url" target="_blank" rel="noopener">{{ s.title }}</a>
        <span v-else>{{ s.title }}</span>
        <template v-if="s.year"> ({{ s.year }})</template>
      </li>
    </ol>
    <p v-if="!sources.length" class="empty">Noch keine Quellen erfasst.</p>
  </div>
</template>

<style scoped>
.literaturverzeichnis ol {
  margin: 0;
  padding-left: 1.4em;
  font-size: 0.8rem;
  line-height: 1.45;
}
.literaturverzeichnis li {
  margin-bottom: 0.5rem;
  break-inside: avoid;
  color: #333;
}
.literaturverzeichnis a {
  color: var(--slidev-theme-primary);
  text-decoration: none;
  border-bottom: none;
}
.literaturverzeichnis a:hover {
  text-decoration: underline;
}
.literaturverzeichnis .empty {
  color: #909090;
  font-style: italic;
}
</style>
