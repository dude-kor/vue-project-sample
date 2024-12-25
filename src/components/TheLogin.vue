<script setup lang="ts">
import { onMounted } from 'vue'
import { useTestStore } from '@/stores/test'

const test = useTestStore()
onMounted(() => {
  test.test()
})
</script>

<template>
  {{ test.result }}
</template>
