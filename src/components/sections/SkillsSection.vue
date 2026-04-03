<script setup>
import SkillBar from './SkillBar.vue'

const skills = [
  { label: 'HTML 5', percent: 90, colorClass: 'color-1', ariaValue: 90 },
  { label: 'CSS3/ SCSS', percent: 85, colorClass: 'color-2', ariaValue: 85 },
  { label: 'JavaScript (ES6+)', percent: 75, colorClass: 'color-3', ariaValue: 95 },
  { label: 'Vue.js', percent: 90, colorClass: 'color-4', ariaValue: 90 },
  { label: 'React.js', percent: 70, colorClass: 'color-5', ariaValue: 70 },
  { label: 'Figma', percent: 80, colorClass: 'color-6', ariaValue: 80 },
]
</script>

<template>
  <section class="ftco-section" id="skills-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 heading-section text-center ftco-animate">
          <h2 class="mb-4">My Skills</h2>
          <p>
            Experienced in developing scalable and high-performance web applications using modern frontend
            technologies, with a strong focus on clean code, performance optimization, and user experience.
          </p>
        </div>
      </div>
      <div class="row">
        <SkillBar v-for="(s, i) in skills" :key="i" v-bind="s" />
      </div>
    </div>
  </section>
</template>
