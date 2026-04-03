import { ref, onMounted } from 'vue'

/**
 * Mirrors the original template loader: hide after a tick once mounted.
 */
export function usePageLoader() {
  const showLoader = ref(true)

  onMounted(() => {
    requestAnimationFrame(() => {
      showLoader.value = false
    })
  })

  return { showLoader }
}
