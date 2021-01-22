const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    defaults: {
      script: 'typescript',
      style: 'scss'
    },
    scss: {
      includePaths: ['src'],
    }
  }),
};