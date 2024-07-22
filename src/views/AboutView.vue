<script setup lang="ts">
import HelloAccordion from '@/components/HelloAccordion.vue'
</script>

<template>
  <div class="about">
    <HelloAccordion />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
