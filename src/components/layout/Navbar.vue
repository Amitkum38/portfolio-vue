<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineProps({
  brand: { type: String, default: 'Amit kumar' },
  /** Route target for the logo / brand (e.g. `{ name: 'home' }` or `'/'`) */
  brandTo: { type: [String, Object], default: '/' },
  /** Navigation entries: `to` is any valid `vue-router` location (string or object, including `hash`). */
  items: {
    type: Array,
    default: () => [
      { label: 'Home', to: { path: '/', hash: '#home-section' } },
      { label: 'About', to: { path: '/', hash: '#about-section' } },
      { label: 'Resume', to: { path: '/', hash: '#resume-section' } },
      { label: 'Skills', to: { path: '/', hash: '#skills-section' } },
      { label: 'Projects', to: { path: '/', hash: '#projects-section' } },
      { label: 'Contact', to: { path: '/', hash: '#contact-section' } },
    ],
  },
  /** Extra classes for scroll-based navbar styling (theme-specific) */
  navScrollModifiers: { type: Array, default: () => [] },
})

const route = useRoute()
const menuOpen = ref(false)

function normalizeTo(item) {
  const t = item.to
  if (typeof t === 'string') return { path: t }
  return { path: '/', ...t }
}

/** Active: same path; if link has a hash, match `route.hash` (Home treats empty hash as #home-section). */
function linkIsActive(item) {
  const t = normalizeTo(item)
  const path = t.path ?? '/'
  if (route.path !== path) return false
  const hash = t.hash || ''
  if (!hash) return !route.hash
  if (hash === '#home-section' && !route.hash) return true
  return route.hash === hash
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)
</script>

<template>
  <nav
    id="ftco-navbar"
    :class="[
      'navbar',
      'navbar-expand-lg',
      'navbar-dark',
      'ftco_navbar',
      'ftco-navbar-light',
      'site-navbar-target',
      ...navScrollModifiers,
    ]"
  >
    <div class="container">
      <RouterLink class="navbar-brand" :to="brandTo">{{ brand }}</RouterLink>

      <button
        type="button"
        class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
        :class="{ active: menuOpen }"
        aria-controls="ftco-nav"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="oi oi-menu"></span> Menu
      </button>

      <div :class="['collapse', 'navbar-collapse', { show: menuOpen }]" id="ftco-nav">
        <ul class="navbar-nav nav ml-auto">
          <li
            v-for="(item, index) in items"
            :key="item.label + '-' + index"
            class="nav-item"
          >
            <RouterLink :to="item.to" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                class="nav-link"
                :class="{ active: linkIsActive(item) }"
                @click="
                  (e) => {
                    navigate(e)
                    closeMenu()
                  }
                "
              >
                <span>{{ item.label }}</span>
              </a>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active span {
  font-weight: 600;
}
</style>
