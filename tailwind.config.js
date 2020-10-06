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
        'blue-vanhack': '#2F80ED',
        'dark-blue': '#0471C8',
      },

      boxShadow: {
        'card': '0px 4px 19px rgba(0, 0, 0, 0.09);',
        'hovered-card': '0px 4px 19px #2F80ED',
      },
      width: {
        'event-card': '330px',
      },
      maxWidth: {
        'event-card': '360px',
        'subscribe-input': '330px',
      },
      height: {
        'small-hero': '280px',
        'event-card': '220px',
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
    },
  },
  variants: {},
  plugins: [],
};
