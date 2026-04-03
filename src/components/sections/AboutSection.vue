<script setup>
import { ref, computed } from 'vue'
import { useCountUp } from '@/composables/useCountUp.js'

const PROJECT_TARGET = 120

const counterTrigger = ref(null)
const { display } = useCountUp(counterTrigger, PROJECT_TARGET, { duration: 7000 })

const formattedCount = computed(() =>
  Math.floor(display.value).toLocaleString('en-US')
)

const aboutBg = {
  backgroundImage: 'url(/images/bg_1.png)',
  backgroundPosition: '82%',
}
</script>

<template>
  <section class="ftco-about img ftco-section ftco-no-pb" id="about-section">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-6 col-lg-5 d-flex">
          <div class="img-about img d-flex align-items-stretch">
            <div class="overlay"></div>
            <div
              class="img d-flex align-self-stretch align-items-center"
              :style="aboutBg"
            ></div>
          </div>
        </div>
        <div class="col-md-6 col-lg-7 pl-lg-5 pb-5">
          <div class="row justify-content-start pb-3">
            <div class="col-md-12 heading-section ftco-animate">
              <h2 class="mb-4">About Me</h2>
              <p>
                I am a Senior Frontend Engineer with 10+ years of experience in building scalable and
                high-performance web applications. I specialize in modern JavaScript frameworks like Vue.js
                and React, focusing on clean architecture, performance optimization, and intuitive user
                experiences.
              </p>
              <ul class="about-info mt-4 px-md-0 px-2">
                <li class="d-flex"><span>Name:</span> <span>Amit kumar</span></li>
                <li class="d-flex"><span>Date of birth:</span> <span>August 20, 1992</span></li>
                <li class="d-flex"><span>Address:</span> <span>Uttam Nagar, Delhi, India</span></li>
                <li class="d-flex"><span>Email:</span> <span>amitkum9718@gmail.com</span></li>
                <li class="d-flex">
                  <span>Phone: </span>
                  <span>+91 9999130383, +91 9718380456</span>
                </li>
              </ul>
            </div>
          </div>
          <div ref="counterTrigger" class="counter-wrap ftco-animate d-flex mt-md-3">
            <div class="text">
              <p class="mb-4">
                <span class="number mr-2">{{ formattedCount }}</span>
                <span>Project complete</span>
              </p>
              <p>
                <a
                  href="/images/Amit_Kumar_Vue_React_Developer.pdf"
                  class="btn btn-primary py-3 px-3"
                  download="Amit_Kumar_Vue_React_Developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Download CV</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
