<script setup lang="ts">
import { computed } from 'vue'
import { parseSources } from '../composables/useSources'
// Import the deck source at build time and parse every <LiteraturSource> out of
// it — deterministic, independent of slide mount order.
import rawSlides from '../../slides.md?raw'

// `part`/`parts` let the deck split a growing source list across multiple
// slides instead of shrinking the font indefinitely as chapters are added.
// Default (part=1, parts=1) renders the full list on one slide, unchanged
// from before. Slices are computed from the CURRENT total, so bumping
// `parts` (e.g. 2 → 3) as the deck grows never requires manual re-indexing.
const props = withDefaults(defineProps<{ part?: number; parts?: number }>(), {
  part: 1,
  parts: 1,
})

const allSources = computed(() => parseSources(rawSlides as string))

const sliceStart = computed(() => {
  const perPart = Math.ceil(allSources.value.length / props.parts)
  return (props.part - 1) * perPart
})

const sources = computed(() => {
  const perPart = Math.ceil(allSources.value.length / props.parts)
  return allSources.value.slice(sliceStart.value, sliceStart.value + perPart)
})
</script>

<template>
  <div class="literaturverzeichnis">
    <ol :start="sliceStart + 1">
      <li v-for="(s, i) in sources" :key="i">
        <a v-if="s.url" :href="s.url" target="_blank" rel="noopener">{{ s.title }}</a>
        <span v-else>{{ s.title }}</span>
        <template v-if="s.year"> ({{ s.year }})</template>
      </li>
    </ol>
    <p v-if="!allSources.length" class="empty">Noch keine Quellen erfasst.</p>
  </div>
</template>

<style scoped>
.literaturverzeichnis ol {
  margin: 0;
  margin-bottom: 0.6rem;
  padding-left: 1.1em;
  font-size: 0.64rem;
  line-height: 1.2;
  column-count: 5;
  column-fill: balance;
  column-gap: 1em;
  width: 100%;
}
.literaturverzeichnis li {
  margin-bottom: 0.16rem;
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
