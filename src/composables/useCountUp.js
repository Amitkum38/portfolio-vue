import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Animated number for the "Project complete" counter (replaces jQuery animateNumber).
 */
export function useCountUp(targetRef, endValue, options = {}) {
  const display = ref(0)
  const { duration = 120 } = options
  let rafId = null
  let io = null

  onMounted(() => {
    const el = targetRef.value
    if (!el) return

    io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()

        const start = performance.now()
        const from = 0
        const to = endValue

        function frame(now) {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - t) ** 3
          display.value = Math.floor(from + (to - from) * eased)
          if (t < 1) rafId = requestAnimationFrame(frame)
          else display.value = to
        }

        rafId = requestAnimationFrame(frame)
      },
      { threshold: 0.15 }
    )
    io.observe(el)
  })

  onUnmounted(() => {
    if (io) io.disconnect()
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { display }
}
