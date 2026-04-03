<script setup>
defineProps({
  date: { type: String, required: true },
  title: { type: String, required: true },
  position: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <div class="resume-wrap ftco-animate">
    <span class="date">{{ date }}</span>
    <h2>{{ title }}</h2>
    <span class="position">{{ position }}</span>
    <p class="mt-4">{{ text }}</p>
  </div>
</template>
