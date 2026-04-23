/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#122033',
        navy: '#18324f',
        clinic: '#f7f4ee',
        porcelain: '#fbfcfb',
        mist: '#dce5e3',
        sage: '#6d8580',
        gold: '#b99a63',
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        clinic: '0 28px 90px rgba(18, 32, 51, 0.13)',
        soft: '0 12px 36px rgba(18, 32, 51, 0.08)',
        lift: '0 18px 52px rgba(18, 32, 51, 0.1)',
      },
    },
  },
  plugins: [],
};
