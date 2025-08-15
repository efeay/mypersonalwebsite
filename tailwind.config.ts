import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					glass: 'hsl(var(--card-glass))'
				},
				hero: {
					start: 'hsl(var(--hero-start))',
					middle: 'hsl(var(--hero-middle))',
					end: 'hsl(var(--hero-end))'
				},
				nav: {
					glass: 'hsl(var(--nav-glass))',
					border: 'hsl(var(--nav-border))'
				},
				photo: {
					shadow: 'hsl(var(--photo-shadow))',
					shadowFinal: 'hsl(var(--photo-shadow-final))'
				}
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--hero-start)) 0%, hsl(var(--hero-middle)) 50%, hsl(var(--hero-end)) 100%)',
			},
			boxShadow: {
				'glass': '0 20px 25px -5px hsl(var(--card-shadow)), 0 10px 10px -5px hsl(var(--card-shadow))',
				'glass-hover': '0 25px 50px -12px hsl(var(--card-shadow))',
				'photo-glow': '0 0 15px hsl(var(--photo-shadow))',
				'photo-glow-final': '0 0 10px hsl(var(--photo-shadow-final))',
			},
			backdropBlur: {
				'glass': '10px',
				'nav': '12px',
			},
			zIndex: {
				'60': '60',
				'70': '70',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
} satisfies Config;
