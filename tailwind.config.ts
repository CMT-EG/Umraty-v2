import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import rtl from "tailwindcss-rtl";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        neural: {
          "50": "#F6F6F6",
          "100": "#E7E7E7",
          "200": "#D1D1D1",
          "300": "#B0B0B0",
          "400": "#888888",
          "500": "#6D6D6D",
          "600": "#5D5D5D",
          "700": "#4F4F4F",
          "800": "#454545",
          "900": "#3D3D3D",
          "950": "#050505",
          DEFAULT: "#888888",
        },
        primary: {
          "50": "#F7F4EF",
          "100": "#EBE4D6",
          "200": "#D9CAAF",
          "300": "#C3A981",
          "400": "#B49164",
          "500": "#A27B50",
          "600": "#8B6343",
          "700": "#704C38",
          "800": "#5F4134",
          "900": "#533930",
          "950": "#2F1E19",
          DEFAULT: "#B49164",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      height: {
        rvh: "calc(100dvh - 140px)",
        authvh: "calc(100dvh - 40px)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        alexandria: "var(--font-alexandria)",
        almarai: "var(--font-almarai)",
      },
      backgroundImage: {
        service:
          "linear-gradient(-133deg, rgba(236, 248, 252, 0.84) 42.92%, rgba(236, 248, 252, 0.00) 100%)",
        reservation:
          "linear-gradient(to bottom, transparent 0, #F6F6F6 70px, #EBE4D6 70px, #EBE4D6 100%)",
        "login-background": 'url("/login_background.avif")',
        "hero-background": 'url("/hero_background.avif")',
        "rooms-background": 'url("/rooms_background.avif")',
      },
      boxShadow: {
        "3d": "rgba(0, 0, 0, 0.3) 0px 1px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, rtl],
} satisfies Config;
