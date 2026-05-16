// Brand colors
export const colors = {
  black:   '#1A1A1A',
  white:   '#FFFFFF',
  red:     '#E31E24',
  gray100: '#F5F5F5',
  gray200: '#E8E8E8',
  gray500: '#888888',
  gray800: '#333333',
} as const

// Typography
export const fonts = {
  family:         'Nunito Sans, sans-serif',
  familyArabic:   'Changa, sans-serif',
  weightLight:    300,
  weightNormal:   400,
  weightSemibold: 600,
  weightBold:     800,
} as const

// Font size tokens (reference to CSS vars)
export const textSizes = {
  display: 'var(--text-display)',
  h1:      'var(--text-h1)',
  h2:      'var(--text-h2)',
  h3:      'var(--text-h3)',
  h4:      'var(--text-h4)',
  bodyLg:  'var(--text-body-lg)',
  body:    'var(--text-body)',
  bodySm:  'var(--text-body-sm)',
  label:   'var(--text-label)',
  caption: 'var(--text-caption)',
} as const

// Border radius tokens
export const radius = {
  sm:   'var(--radius-sm)',
  md:   'var(--radius-md)',
  lg:   'var(--radius-lg)',
  xl:   'var(--radius-xl)',
  full: 'var(--radius-full)',
} as const

// Shadow tokens
export const shadows = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
} as const

// Brand logo config
export const logo = {
  ringColor:  '#1A1A1A',
  dotColor:   '#E31E24',
  wordmark:   'Qaissar',
  font:       'Nunito Sans',
  fontWeight: 800,
} as const

// Nav config
export const nav = {
  height:          '4rem',
  heightPx:        64,
  backgroundColor: '#FFFFFF',
  borderColor:     '#E8E8E8',
} as const

// Button variants reference
export const buttonVariants = {
  primary:   'bg-brand-red text-white hover:bg-red-700',
  secondary: 'border border-brand-black text-brand-black hover:bg-brand-black hover:text-white',
  ghost:     'text-brand-black hover:text-brand-red',
} as const

// Breakpoints (for reference — Tailwind handles these)
export const breakpoints = {
  sm:    '640px',
  md:    '768px',
  lg:    '1024px',
  xl:    '1280px',
  '2xl': '1536px',
} as const
