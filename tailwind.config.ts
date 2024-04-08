import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'], 
      },
      width: {
        '37': '9.1rem',
      },
      backgroundImage: {
        'convert_currency_educational_component_background': "url('../assets/img/background_main.png')",
      },
    },
  },
  plugins: [],
};
export default config;