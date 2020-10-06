module.exports = {
  purge: ['./public/**/*.html'],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        body: '#FCFDFF',
        section: '#F3F7FF',
        paragraph: '#828282',
        primary: '#01569C',
        title: '#4F4F4F',
        secondary: '#FFBA36',
        accent: '#EF5C11',
        'blue-vanhack': '#2F80ED',
        'dark-blue': '#0471C8',
      },

      boxShadow: {
        card: '0px 4px 19px rgba(0, 0, 0, 0.09);',
        highlight: '0px 2px 23px rgba(239, 92, 17, 0.45)',
        premium: '0px 2px 23px rgba(255, 186, 54, 0.62)',
        'hovered-card': '0px 4px 19px #2F80ED',
      },
      width: {
        'event-card': '330px',
        'upcoming-card': '280px',
        'card': '90vw',
      },
      maxWidth: {
        'event-card': '360px',
        'subscribe-input': '330px',
        'countdown': '500px',
      },
      height: {
        'small-hero': '280px',
        'event-card': '220px',
        'upcoming-card': '240px',
        'upcoming-card-container': '280px',
      },
      backgroundImage: {
        'hero-image': "url('/assets/images/hero_photo.png')",
        'van-gradient': 'linear-gradient(90deg, rgba(4,117,206,1) 0%, rgba(36,193,202,1) 100%);',
      },
      backgroundColor: {
        'blue-vanhack-500': '#2F80ED',
        'event-icon': 'rgba(44, 155, 245, 0.4)',
      },
      opacity: {
        10: '10%',
      },
      inset: {
        '-8': '-2.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
