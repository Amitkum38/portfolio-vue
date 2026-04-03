<script setup>
import { onMounted, nextTick } from 'vue'
import AOS from 'aos'

import Navbar from '@/components/layout/Navbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ResumeSection from '@/components/sections/ResumeSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

import { useNavbarScroll } from '@/composables/useNavbarScroll.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const { navScrollModifiers } = useNavbarScroll()
useScrollReveal('#app')

onMounted(async () => {
  await nextTick()
  AOS.init({
    duration: 800,
    easing: 'slide',
  })
})
</script>

<template>
  <div>
    <Navbar brand="Amit kumar" :nav-scroll-modifiers="navScrollModifiers" />
    <HeroSection />
    <AboutSection />
    <ResumeSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <SiteFooter />
  </div>
</template>
