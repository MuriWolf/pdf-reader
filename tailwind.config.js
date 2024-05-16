/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "c-primary": "#6153cc",
        "c-secondary": "#1e293b",
        "c-secondary-dark": "#0f172a",
        "c-secondary-light": "#334155",
        "c-secondary-lighter": "#cbd5e1",
        "c-body-text": "#f8fafc",
      }
    },
  },
  plugins: [],
}

