<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  width?: string
  credit?: string
  href?: string
}>()
</script>

<template>
  <figure class="storyset-figure">
    <img :src="src" :alt="alt" :style="{ width: width || '100%' }">
    <figcaption class="storyset-credit">
      <a :href="href || 'https://storyset.com'" target="_blank" rel="noopener">
        {{ credit || 'Illustration by Storyset' }}
      </a>
    </figcaption>
  </figure>
</template>

<style scoped>
.storyset-figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.storyset-credit {
  margin-top: 0.25rem;
  font-size: 0.6rem;
  color: #b0b0b0;
  text-align: center;
}
.storyset-credit a {
  color: inherit;
  text-decoration: none;
  border-bottom: none;
}
.storyset-credit a:hover {
  color: #909090;
}
</style>
