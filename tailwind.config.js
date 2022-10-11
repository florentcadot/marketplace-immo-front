module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#585AFC',
        blue: '#14B2FF',
        blueAnchor: '#0645AD',
        lightBlue: 'rgba(20, 178, 255, 0.1)',
        purple: '#710ED4',
        success: "#2AAA91",
        error: "#F04542",
        warning: "#FDB735",
        white: "#FFFFFF",
        divider: "rgba(1, 1, 20, 0.1)",
        black: {
          primary: "#010114",
          secondary: "rgba(1, 1, 20, 0.8)",
          tertiary: "rgba(1, 1, 20, 0.6)",
          input: "rgba(1, 1, 20, 0.3)",
        },
        green: '#1CB832'
      },
      width: {
        'logo': '60px',
        'icon-desktop': '20px',
        '200': '200px',
        '350': '350px',
        '400': '400px',
        '600': '600px',
        '750': '750px',
      },
      height: {
        'logo': '60px',
        'icon-desktop': '20px',
        'map': '300px',
        '250': '250px',
        '600': '600px',
        '700': '700px',
        '500': '500px',
      },
      margin: {
        100: '100px',
        200: '200px',
        250: '250px',
        350: '350px',
        400: '400px'
      },
      padding: {
        'visitor': '5%'
      },
      backgroundImage: {
        'owner-home': "url('src/adapter/primary/view/asset/image/owner-home.png')",
        'lease-seeking-home': "url('src/adapter/primary/view/asset/image/lease-seeking-home.jpg')",
      },
      zIndex: {
        background: -1,
        9999: 9999,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
}
