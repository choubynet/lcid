import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      relative: true,
    },
    adapter: adapter({
      fallback: 'index.html'
    })
  }
}

export default config
