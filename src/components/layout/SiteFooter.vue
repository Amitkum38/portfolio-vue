<script setup>
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="ftco-footer ftco-section p-0">
    <div class="container">
      <div class="row mb-3">
        <div class="col-md d-flex align-items-center justify-content-center">
          <div class="ftco-footer-widget mb-3">
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5 mb-0">
              <li class="ftco-animate">
                <a href="https://x.com/amitkum9718" target="_blank"><span class="icon-twitter"></span></a>
              </li>
              <li class="ftco-animate">
                <a href="https://www.linkedin.com/in/amit-kumar-17854165/" target="_blank"><span class="icon-linkedin"></span></a>
              </li>
              <li class="ftco-animate">
                <a href="https://github.com/Amitkum38" target="_blank"><span class="icon-github"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            Copyright &copy; {{ year }} All rights reserved 
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
