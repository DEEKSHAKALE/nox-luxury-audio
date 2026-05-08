import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['var(--font-body)', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 12px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        card: "var(--shadow-card)",
      },
      backgroundImage: {
        "gradient-silver": "var(--gradient-silver)",
        "gradient-cta": "var(--gradient-cta)",
        "gradient-radial-glow": "var(--gradient-radial-glow)",
      },
      animation: {
        "cta-shimmer": "cta-shimmer 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "particle-rise": "particle-rise 12s linear infinite",
      },
      keyframes: {
        "cta-shimmer": {
          "0%, 100%": { backgroundPosition: "0%" },
          "50%": { backgroundPosition: "100%" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-24px) rotate(1deg)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "particle-rise": {
          "0%": { opacity: "0", transform: "translateY(100vh) scale(.4)" },
          "10%": { opacity: ".6" },
          "90%": { opacity: ".4" },
          "100%": { opacity: "0", transform: "translateY(-10vh) scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

