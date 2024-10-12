import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.75rem', // 12px
        md:'0.875', // 14px
        base: '1rem', // 16px
        mdBase:'1.125', // 18px
        xl: '1.25rem', // 20px
        xlg:'2.25 rem', //36px
      },
      backgroundImage: {
        'hero-background': "url('/hero_background.svg')",
        'hero-bg': "url('/hero_bg.svg')",
        'hero-frame-bg': "url('/hero_frame.svg')",
        'profile-bg': "url('/profile.svg"
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
