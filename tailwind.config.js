/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './about/index.html',
    './proof/index.html',
    './contact/index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    // Design tokens ported from assets/ds/colors.css. Ink + Paper do ~95% of the
    // work; Amber is accent-only (throughline, links, CTAs, number callouts).
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#14181F', // body text on paper (--black)
      ink: {
        DEFAULT: '#1B2A41',
        90: '#2C3B52',
        70: '#4A5870',
        50: '#626A7A',
        40: '#9AA3B2',
        15: '#D9DCE1',
      },
      amber: {
        DEFAULT: '#C4712B',
        hover: '#A85E20',
      },
      paper: {
        DEFAULT: '#F6F3ED',
        sunken: '#EFEAE0',
      },
      // Text on Ink sections
      inverse: '#B9C1CE', // secondary text on inverse
      meta: '#8A93A6', // footer copyright row
    },
    extend: {
      // Mobile-first breakpoints tuned to the design: md is the ≤820px mobile
      // cutoff (stack point); lg is the ≥1081px full-desktop hero.
      screens: {
        md: '821px',
        lg: '1081px',
      },
      fontFamily: {
        // Semantic tokens mapped to the three GT Sectra optical families.
        heading: ['"GT Sectra Display"', 'Georgia', 'serif'],
        body: ['"GT Sectra"', 'Georgia', 'serif'],
        ui: ['"GT Sectra"', 'Georgia', 'serif'],
        editorial: ['"GT Sectra Fine"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1080px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(27, 42, 65, 0.06)',
        raised: '0 4px 16px rgba(27, 42, 65, 0.10)',
      },
      borderRadius: {
        sm: '2px', // buttons, inputs, tags
        DEFAULT: '4px', // cards
      },
      transitionTimingFunction: {
        quiet: 'cubic-bezier(0.25, 0.6, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
