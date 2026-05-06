/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* === PRIMARY BRAND === */
        primary: '#C45911',
        'primary-dark': '#a34a0e',

        /* === TEXT === */
        heading: '#262626',
        body: '#696969',
        muted: '#999999',

        /* === BACKGROUNDS === */
        'bg-white': '#ffffff',
        'bg-light': '#f9f5f0',
        'bg-dark': '#1a1a1a',
        'bg-darker': '#111111',
        'bg-card': '#ffffff',

        /* === BORDERS === */
        border: '#e9e9e9',
        'border-dark': '#2a2a2a',

        /* === VERTICAL ACCENTS === */
        gold: '#B8860B',
        maroon: '#6B1A1A',
        green: '#1A3C2B',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        hero: ['58px', { lineHeight: '1.1', fontWeight: '700' }],
        h2: ['38px', { lineHeight: '1.15', fontWeight: '700' }],
        h3: ['22px', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.75', fontWeight: '400' }],
        small: ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        xs: ['13px', { lineHeight: '1.5', fontWeight: '400' }],
        label: ['12px', { lineHeight: '1', fontWeight: '600' }],
      },
      spacing: {
        section: '80px',
        'section-sm': '48px',
      },
      borderRadius: {
        btn: '30px',
        card: '8px',
        tag: '4px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(0,0,0,0.10)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
      },
      maxWidth: {
        container: '1200px',
      },
      letterSpacing: {
        label: '0.14em',
        nav: '0.04em',
        btn: '0.06em',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
    },
  },
  plugins: [],
};
