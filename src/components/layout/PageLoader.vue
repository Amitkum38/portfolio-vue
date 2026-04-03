<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: true },
})

const loaderClass = computed(() => ['fullscreen', { show: props.show }])
</script>

<template>
  <div id="ftco-loader" :class="loaderClass">
    <svg class="circular" width="48px" height="48px">
      <circle
        class="path-bg"
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke-width="4"
        stroke="#eeeeee"
      />
      <circle
        class="path"
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke-width="4"
        stroke-miterlimit="10"
        stroke="#F96D00"
      />
    </svg>
  </div>
</template>
