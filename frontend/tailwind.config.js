/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        'heading': ['Montserrat', 'sans-serif'],
                        'body': ['Open Sans', 'sans-serif'],
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        // New tech theme colors
                        'tech-dark': '#0a1628',
                        'tech-blue': '#1a3a5c',
                        'tech-blue-light': '#2563eb',
                        'tech-cyan': '#00d4ff',
                        'tech-gold': '#f5a623',
                        'tech-orange': '#e8951d',
                        'tech-glow': '#4facfe',
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                },
                keyframes: {
                        'glow-pulse': {
                                '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                                '50%': { opacity: '1', transform: 'scale(1.1)' }
                        },
                        'circuit-flow': {
                                '0%': { backgroundPosition: '0% 0%' },
                                '100%': { backgroundPosition: '100% 100%' }
                        },
                        'float': {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-15px)' }
                        },
                        'particle': {
                                '0%': { opacity: '0', transform: 'translateY(20px)' },
                                '50%': { opacity: '1' },
                                '100%': { opacity: '0', transform: 'translateY(-20px)' }
                        }
                },
                animation: {
                        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                        'circuit-flow': 'circuit-flow 20s linear infinite',
                        'float': 'float 4s ease-in-out infinite',
                        'particle': 'particle 3s ease-in-out infinite'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
