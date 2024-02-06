module.exports = {
  prefix: 'twcss-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
        panton: '"Panton Rust Heavy Base", sans-serif',
        knocky: '"Knocky", sans-serif',
        haymer: '"Haymer Small Capitals Condensed", sans-serif',
        cookie: '"Smart Cookie", sans-serif',
        sans: 'Arial, Helvetica, sans-serif',
      },
      maxWidth: {
        '2xl': '36em',
      },
      fontSize: {
        '7xl': [
          '4vw',
          {
            lineHeight: 1,
            letterSpacing: '-0.025em',
          },
        ],
      },
    },
    color: {
      black: '#000000',
    },
  },
  plugins: [],
};
