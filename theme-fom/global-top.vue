<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const logo = $slidev?.configs?.themeConfig?.logo ?? '/fom_logo.svg'
</script>

<template>
  <div
    v-if="$slidev.nav.currentLayout !== 'cover' && $slidev.nav.currentLayout !== 'intro'"
    class="header"
  >
    <img :src="logo" alt="logo">
  </div>
</template>
