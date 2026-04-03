<script setup>
import { RouterView } from 'vue-router'
import PageLoader from '@/components/layout/PageLoader.vue'
import { usePageLoader } from '@/composables/usePageLoader.js'

const { showLoader } = usePageLoader()
</script>

<template>
  <div id="app-root">
    <PageLoader :show="showLoader" />
    <RouterView />
  </div>
</template>
