export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(248, 68, 100, 0.15)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(248,68,100,0.18), transparent 30%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08), transparent 20%), linear-gradient(180deg, #111111 0%, #090909 100%)',
      },
    },
  },
  plugins: [],
};
