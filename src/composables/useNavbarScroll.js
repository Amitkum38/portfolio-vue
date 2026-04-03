import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * Replicates Bootstrap theme navbar scroll classes from the original main.js.
 */
export function useNavbarScroll() {
  const scrollY = ref(0)

  function onScroll() {
    scrollY.value = window.scrollY || document.documentElement.scrollTop
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  const navScrollModifiers = computed(() => {
    const st = scrollY.value
    const m = []
    if (st > 150) m.push('scrolled')
    if (st > 350) m.push('awake')
    else if (st > 150) m.push('sleep')
    return m
  })

  return { navScrollModifiers }
}
