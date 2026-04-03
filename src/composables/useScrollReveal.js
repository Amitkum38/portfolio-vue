import { nextTick, onMounted, onUnmounted } from 'vue'

/**
 * Replaces jQuery Waypoint + staggered fade-in for `.ftco-animate` nodes.
 */
export function useScrollReveal(rootSelector = '#app') {
  const observers = []

  onMounted(async () => {
    await nextTick()
    const root = document.querySelector(rootSelector)
    if (!root) return

    const all = [...root.querySelectorAll('.ftco-animate')]

    all.forEach((el) => {
      const index = all.indexOf(el)
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          const node = entry.target
          if (node.classList.contains('ftco-animated')) return
          io.unobserve(node)

          setTimeout(() => {
            node.classList.add('item-animate')
            setTimeout(() => {
              const effect = node.dataset.animateEffect
              if (effect === 'fadeIn') node.classList.add('fadeIn', 'ftco-animated')
              else if (effect === 'fadeInLeft') node.classList.add('fadeInLeft', 'ftco-animated')
              else if (effect === 'fadeInRight') node.classList.add('fadeInRight', 'ftco-animated')
              else node.classList.add('fadeInUp', 'ftco-animated')
              node.classList.remove('item-animate')
            }, index * 50)
          }, 100)
        },
        { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
      )
      io.observe(el)
      observers.push(io)
    })
  })

  onUnmounted(() => {
    observers.forEach((o) => o.disconnect())
  })
}
