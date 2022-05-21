module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}",
  ],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        torkWebTheme: {

          "primary": "#2563eb",

          "secondary": "#60a5fa",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
