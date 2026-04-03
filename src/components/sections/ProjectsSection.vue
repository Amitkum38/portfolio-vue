<script setup>
import ProjectCard from './ProjectCard.vue'

/** Har project ka apna image, title, tag aur link */
const projects = {
  p1: {
    imageUrl: '/images/project-1.jpg',
    title: 'Video KYC / digital onboarding features',
    tag: 'React.js · Bootstrap',
    link: 'http://kyc.kalolytic.com/',
  },
  p2: {
    imageUrl: '/images/project-2.jpg',
    title: 'Find the right freelancer for your project',
    tag: 'HTML5 · CSS3 · JavaScript',
    link: 'https://www.addlance.com',
  },
  p3: {
    imageUrl: '/images/project-3.jpg',
    title: 'Zwing from Ginesys One suite, is a cloud based POS that has two applications.',
    tag: 'Vue 3 · Bootstrap · Syncfusion Ag-Grid',
    link: 'https://stage-v2.console.gozwing.com',
  },
  p4: {
    imageUrl: '/images/project-4.jpg',
    title: 'Industry: Real Estate / Property Management',
    tag: 'HTML · CSS · JavaScript',
    link: 'https://mvernon.com',
  },
  p5: {
    imageUrl: '/images/project-5.jpg',
    title: 'Dental / Healthcare clinic',
    tag: 'HTML · CSS · JS',
    link: 'https://www.drbhutanidentalclinic.com/',
  },
  p6: {
    imageUrl: '/images/project-6.jpg',
    title: 'Ginesys One offers Zwing mPOS, a cloud-based point of sale application available as a web POS, that empowers stores with a contemporary mobile billing experience',
    tag: 'Vue.js · OpenAPI',
    link: 'https://stage-v2.app.gozwing.com/',
  },
  p7: {
    imageUrl: '/images/project-7.jpg',
    title: 'Profile Analysis',
    tag: 'Github Profile Analysis',
    link: 'https://github.com/Amitkum38',
  },
  p8: {
    imageUrl: '/images/project-8.jpg',
    title: 'Industry: E-commerce (shoes + clothing)',
    tag: 'HTML · CSS · JavaScript',
    link: 'https://www.zappos.com/',
  },
  p9: {
    imageUrl: '/images/project-9.jpg',
    title: 'Religious / NGO organization',
    tag: 'HTML · CSS · JavaScript',
    link: 'https://hhcj.org/',
  },
  p10: {
    imageUrl: '/images/project-10.jpg',
    title: 'Behance Portfolio',
    tag: 'Adobe XD · Figma',
    link: 'https://www.behance.net/amitkum',
  },
}
</script>

<template>
  <section class="ftco-section ftco-project" id="projects-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 heading-section text-center ftco-animate">
          <h2 class="mb-4">Our Projects</h2>
          <p>
            Showcasing a collection of projects that highlight my expertise in frontend development, UI design,
            and building responsive, user-friendly web applications.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <ProjectCard v-bind="projects.p1" />
        </div>
        <div class="col-md-8">
          <ProjectCard v-bind="projects.p2" />
        </div>

        <div class="col-md-8">
          <ProjectCard v-bind="projects.p3" />
        </div>
        <div class="col-md-4">
          <ProjectCard v-bind="projects.p4" />
        </div>
        <div class="col-md-4">
          <ProjectCard v-bind="projects.p5" />
        </div>
        <div class="col-md-8">
          <ProjectCard v-bind="projects.p6" />
        </div>
        <div class="col-md-4">
          <ProjectCard v-bind="projects.p7" />
        </div>
        <div class="col-md-8">
          <ProjectCard v-bind="projects.p8" />
        </div>

        <div class="col-md-8">
          <ProjectCard v-bind="projects.p9" />
        </div>
        <div class="col-md-4">
          <ProjectCard v-bind="projects.p10" />
        </div>

        
        
      </div>
    </div>
  </section>
</template>
