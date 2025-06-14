module.exports = {
    mode: 'jit',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#0052cc',
          secondary: '#ffffff'
        }
      }
    },
    variants: { extend: {} },
    plugins: []
  }