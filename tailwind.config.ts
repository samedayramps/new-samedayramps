import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontSize: {
        // Mobile-first font sizes
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        // Heading specific sizes
        'heading-sm': ['1.5rem', { lineHeight: '1.33' }],
        'heading-base': ['1.875rem', { lineHeight: '1.33' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.33' }],
        'heading-xl': ['3rem', { lineHeight: '1.16' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
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

          // Component settings
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
    darkTheme: false,
    base: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: false,
  },
} satisfies Config;
