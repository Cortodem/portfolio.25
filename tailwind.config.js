module.exports = {
  content: ['./src/**/*.{astro,html,js,svelte,vue,tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        azul: 'fabada'
      }
    },
  },
  plugins: [],
}
