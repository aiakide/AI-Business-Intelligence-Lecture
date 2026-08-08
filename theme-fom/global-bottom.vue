<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const cfg = $slidev?.configs?.themeConfig ?? {}
const author = cfg.author ?? ''
const date = cfg.date ?? ''
const title = $slidev?.configs?.title ?? ''
</script>

<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover' && $slidev.nav.currentLayout !== 'intro'"
  >
    <div class="content">
      <p class="left">{{ date }}</p>
      <p class="center">{{ title }} | {{ author }}</p>
      <div class="right"><SlideCurrentNo /> / <SlidesTotal /></div>
    </div>
  </footer>
</template>
