<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import $ from 'jquery'
import { useViewportHeight } from '@/composables/useViewportHeight.js'

const { viewportHeight } = useViewportHeight()

const homeSliderRef = ref(null)

const fullHeightStyle = computed(() => ({
  height: `${viewportHeight.value}px`,
}))

const imgStyle = {
  backgroundImage: 'url(/images/bg_1.png)',
  backgroundPosition: '82%',
  opacity: 0.3,
   height: '1022px',
}

const OWL_OPTIONS = {
  loop: true,
  autoplay: true,
  margin: 0,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  nav: false,
  autoplayHoverPause: false,
  items: 1,
  navText: [
    "<span class='ion-md-arrow-back'></span>",
    "<span class='ion-chevron-right'></span>",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 },
  },
}

function destroyOwl() {
  const el = homeSliderRef.value
  if (!el) return
  const $el = $(el)
  if ($el.data('owl.carousel')) {
    $el.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded owl-drag owl-grab')
  }
}

onMounted(() => {
  nextTick(() => {
    if (!homeSliderRef.value) return
    $(homeSliderRef.value).owlCarousel(OWL_OPTIONS)
  })
})

onBeforeUnmount(() => {
  destroyOwl()
})
</script>

<template>
  <section id="home-section" class="hero">
    <div ref="homeSliderRef" class="home-slider owl-carousel">
      <div class="slider-item">
        <div class="overlay"></div>
        <div class="container">
          <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end">
            <div
              class="one-third js-fullheight order-md-last img"
              :style="[fullHeightStyle, imgStyle]"
            >
              <div class="overlay"></div>
            </div>
            <div class="one-forth d-flex align-items-center ftco-animate">
              <div class="text">
                <span class="subheading">Hello!</span>
                <h1 class="mb-4 mt-3">I'm <span>Amit kumar</span></h1>
                <h2 class="mb-4">Software Development Engineer Frontend</h2>
                <p>
                  <a href="mailto:amitkum9718@gmail.com" target="_blank" class="btn btn-primary py-3 px-4 mr-2">Hire me</a>
                  <a href="https://github.com/Amitkum38" class="btn btn-white btn-outline-white py-3 px-4" target="_blank">My works</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
