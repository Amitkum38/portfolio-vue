<script setup>
import ContactForm from '@/components/forms/ContactForm.vue'

const contactBg = { backgroundImage: 'url(/images/about.jpg)' }
</script>

<template>
  <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <h2 class="mb-4">Contact Me</h2>
          <p>I am available on the following platforms</p>
        </div>
      </div>

      <div class="row d-flex contact-info mb-5">
        <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-map-signs"></span>
            </div>
            <h3 class="mb-4">Address</h3>
            <p>Uttam Nagar, Delhi, India</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-phone2"></span>
            </div>
            <h3 class="mb-4">Contact Number</h3>
            <p><a href="tel:+919999130383">+91 9999130383</a></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-paper-plane"></span>
            </div>
            <h3 class="mb-4">Email Address</h3>
            <p>
              <a href="mailto:amitkum9718@gmail.com" target="_blank">amitkum9718@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-globe"></span>
            </div>
            <h3 class="mb-4">Website</h3>
            <p><a href="https://github.com/Amitkum38" target="_blank">amitkum9718.github.io</a></p>
          </div>
        </div>
      </div>

      <div class="row no-gutters block-9">
        <div class="col-md-6 order-md-last d-flex">
          <ContactForm />
        </div>

        <div class="col-md-6 d-flex">
          <div class="img" :style="contactBg"></div>
        </div>
      </div>
    </div>
  </section>
</template>
