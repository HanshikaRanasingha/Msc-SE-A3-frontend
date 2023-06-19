/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,ts,tsx,js,jsx}'],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    extend: {},
  },
  theme: {
    fontFamily: {
      inter: ['Inter'],
    },
    colors: Color,
    spacing,
    extend: {
      borderRadius: spacing,
      margin: {
        0.75: '3px',
      },
      fontFamily: {
        mono: ['monospace'],
      },
      spacing: {
        0: '0px',
        px: '1px',
      },
    },
    screens: Object.keys(BreakPoints)
      .map((key) => [key, BreakPoints[key] + 'px'])
      .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {}),
  },
  plugins: [],
};
