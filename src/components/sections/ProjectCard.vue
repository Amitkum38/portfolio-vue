<script setup>
defineProps({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  tag: { type: String, required: true },
  /** Project detail / demo URL */
  link: { type: String, default: '#' },
})

const bg = (url) => ({ backgroundImage: `url(${url})` })
</script>

<template>
  <div
    class="project img ftco-animate d-flex justify-content-center align-items-center"
    :style="bg(imageUrl)"
  >
    <div class="overlay"></div>
    <div class="text text-center p-4">
      <h3>
        <a :href="link" target="_blank" rel="noopener noreferrer">{{ title }}</a>
      </h3>
      <span>{{ tag }}</span>
    </div>
  </div>
</template>
