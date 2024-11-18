/** @import {UserConfig} from 'vite' */

// Make sure to put the target in all three locations below.
const target = 'es2022'

/** @type {UserConfig} */
export default {
  build: {
    target,
  },
  esbuild: {
    target,
  },
  optimizeDeps: {
    esbuildOptions: {
      target,
    }
  }
}