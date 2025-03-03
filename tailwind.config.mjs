/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "var(--darkest)",
        dark: "var(--dark)",
        light: "var(--light)",
        lightest: "var(--lightest)",
        content_color:"var(--content_color)"
      },
    },
  },
  plugins: [],
};
