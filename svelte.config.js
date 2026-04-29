import adapter from '@sveltejs/adapter-static'

const base = process.env.BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base,
    },
    adapter: adapter({
      fallback: 'index.html'
    })
  }
}

export default config
