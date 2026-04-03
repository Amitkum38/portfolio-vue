/**
 * Owl Carousel attaches to `window.jQuery` (see UMD footer: window.Zepto || window.jQuery).
 * Static imports run before any line runs, so `import 'owl.carousel'` must come AFTER
 * `window.jQuery` is set — use dynamic import.
 */
import jQuery from 'jquery'

window.jQuery = window.$ = jQuery

await import('owl.carousel')
