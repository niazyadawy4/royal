import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",        // Primary color
        primary1: "#363738",       // Additional primary color
        secondary: "#F5F5F5",      // Secondary color
        secondary1: "#FEFAF1",     // Additional secondary color
        bg: "#FFFFFF",             // Background color
        text: "#FAFAFA",           // Text color
        text1: "#7D8184",          // Additional text color
        text2: "#000000",          // Another text color
        button: "#000000",         // Button color
        secondary2: "#DB4444",     // Secondary color variant
        button1: "#00FF66",        // Button color variant
        button2: "#DB4444",        // Another button color variant,
        'border-semi-transparent': 'rgba(0, 0, 0, 0.5)',
        hoverButton: '#E07575',
      },
    },
  },
  plugins: [],
};

export default config;
