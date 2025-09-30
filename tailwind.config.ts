
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
					glow: 'hsl(var(--primary-glow))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				text: {
					DEFAULT: 'hsl(var(--text))',
					light: 'hsl(var(--text-light))',
					muted: 'hsl(var(--text-muted))'
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
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Outfit', 'sans-serif'],
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
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-down': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 5px hsl(var(--primary) / 0.5)'
					},
					'50%': { 
						opacity: '0.9',
						boxShadow: '0 0 25px hsl(var(--primary) / 0.8), 0 0 50px hsl(var(--primary) / 0.4)'
					}
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(-4px)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'blob': {
					'0%, 100%': { 
						transform: 'translate(0, 0) scale(1) rotate(0deg)'
					},
					'25%': { 
						transform: 'translate(20px, -20px) scale(1.1) rotate(90deg)'
					},
					'50%': { 
						transform: 'translate(-20px, 20px) scale(0.9) rotate(180deg)'
					},
					'75%': { 
						transform: 'translate(20px, 20px) scale(1.05) rotate(270deg)'
					}
				},
				'slide-up': {
					from: { transform: 'translateY(30px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-left': {
					from: { transform: 'translateX(30px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-right': {
					from: { transform: 'translateX(-30px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'perspective-tilt': {
					'0%, 100%': {
						transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)'
					},
					'50%': {
						transform: 'perspective(1000px) rotateY(5deg) rotateX(-2deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 1s ease-out',
				'fade-down': 'fade-down 1s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
				'spin-slow': 'spin-slow 12s linear infinite',
				'float': 'float 4s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s infinite',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'blob': 'blob 12s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-left': 'slide-left 0.6s ease-out',
				'slide-right': 'slide-right 0.6s ease-out',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'perspective-tilt': 'perspective-tilt 8s ease-in-out infinite'
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
