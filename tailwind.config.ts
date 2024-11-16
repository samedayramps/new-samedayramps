import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          // Brand colors from the image
          "primary": "#4096FB",          // Blue header background
          "primary-focus": "#3182e3",    
          "primary-content": "#ffffff",   
          
          "secondary": "#F47B3F",        // Orange/coral banner color
          "secondary-focus": "#e06b2f",
          "secondary-content": "#ffffff",
          
          "accent": "#EEFF32",           // Neon yellow CTA button
          "accent-focus": "#ddef22",
          "accent-content": "#000000",    // Black text on yellow
          
          // Neutral colors
          "neutral": "#374151",
          "neutral-focus": "#1f2937",
          "neutral-content": "#ffffff",
          
          // Background colors
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#1f2937",
          
          // State colors
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",

          // Component settings (keeping mobile-optimized values)
          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.5rem",
          "--btn-text-case": "none",
          "--navbar-padding": "0.75rem",
          "--btn-padding-x": "1.25rem",
          "--btn-padding-y": "0.625rem",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1.5px",
          "--tab-border": "1.5px",
          "--tab-radius": "0.5rem",
          "--padding-card": "1rem",
          "--input-padding": "0.75rem",
        },
      },
    ],
    darkTheme: "mytheme",
    base: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: false,
  },
} satisfies Config;
