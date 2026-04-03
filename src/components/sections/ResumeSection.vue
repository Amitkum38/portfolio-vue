<script setup>
import ResumeItem from './ResumeItem.vue'

const resumeBody =
  "I am a Senior Frontend Engineer with 10+ years of experience in building scalable and high-performance web applications. I specialize in modern JavaScript frameworks like Vue.js and React, focusing on clean architecture, performance optimization, and intuitive user experiences. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."

const leftColumn = [
  {
    date: '2009',
    title: '10th (Secondary School)',
    position: 'Board of Education',
    text: 'Completed foundational education with focus on core subjects.',
  },
  {
    date: '2011',
    title: "12th (Higher Secondary School)",
    position: 'Board of Education',
    text: 'Completed higher secondary education with academic specialization.',
  },
 
]

const rightColumn = [
{
    date: 'July 2013',
    title: 'Certificate in Professional UI Designer',
    position: 'Arena Animation Institute, New Delhi',
    text: 'Completed a professional UI designer course to enhance my design skills and knowledge.',
  },
  {
    date: '2013 – 2015',
    title: 'Bachelor of Computer Applications (BCA)',
    position: 'Shivaji University, Kolhapur',
    text: 'Focused on software development, web technologies, and programming fundamentals.',
  },
]
</script>

<template>
  <section class="ftco-section ftco-no-pb" id="resume-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-10 heading-section text-center ftco-animate">
          <h2 class="mb-4">Resume</h2>
          <p>
            Senior Frontend Engineer with 10+ years of experience building scalable web applications using
            React.js and Vue.js. Skilled in UI architecture, performance optimization, and REST API
            integration.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <ResumeItem v-for="(item, i) in leftColumn" :key="'l-' + i" v-bind="item" />
        </div>
        <div class="col-md-6">
          <ResumeItem v-for="(item, i) in rightColumn" :key="'r-' + i" v-bind="item" />
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-6 text-center ftco-animate">
          <p>
            <a
              href="/images/Amit_Kumar_Vue_React_Developer.pdf"
              class="btn btn-primary py-4 px-5"
              download="Amit_Kumar_Vue_React_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >Download CV</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
