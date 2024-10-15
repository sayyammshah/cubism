import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {},
      backgroundImage: {
        'heroSectionBackground': "url('/heroSectionBackground.svg')",
        'servicesSectionBanner': "url('/servicesSectionBanner.svg')",
        'profile-bg': "url('/profile.svg"
      },
    },
  },
  plugins: [],
};
export default config;
