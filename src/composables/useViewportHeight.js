import { ref, onMounted, onUnmounted } from 'vue'

export function useViewportHeight() {
  const height = ref(typeof window !== 'undefined' ? window.innerHeight : 800)

  function update() {
    height.value = window.innerHeight
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return { viewportHeight: height }
}
