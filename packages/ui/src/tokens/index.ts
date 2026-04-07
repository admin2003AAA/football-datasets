// ─── NovaStream Design Tokens ─────────────────────────────────────────────────
// These tokens are consumed by Tailwind config and CSS custom properties.

export const colors = {
  // Brand palette
  brand: {
    blue: '#3B82F6',      // Electric Blue — primary CTA
    blueDark: '#1D4ED8',
    blueLight: '#60A5FA',
    violet: '#7C3AED',    // Deep Violet — accent
    violetDark: '#5B21B6',
    violetLight: '#A78BFA',
  },

  // Neutral / dark theme
  neutral: {
    950: '#0A0A0F',   // deepest background
    900: '#0F0F1A',   // primary background
    850: '#13131F',   // card background
    800: '#1A1A2E',   // elevated surface
    700: '#24243A',   // border / divider
    600: '#3A3A56',   // muted border
    500: '#6B6B8A',   // disabled text
    400: '#9B9BB5',   // secondary text
    300: '#C4C4D4',   // body text
    200: '#E2E2EE',   // heading text
    100: '#F0F0F8',   // near white
    50:  '#FAFAFF',   // pure white
  },

  // Semantic
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const;

export const gradients = {
  brand: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
  brandSubtle: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(124,58,237,0.15) 100%)',
  hero: 'linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.8) 60%, rgba(10,10,15,1) 100%)',
  card: 'linear-gradient(145deg, rgba(26,26,46,0.9) 0%, rgba(19,19,31,0.95) 100%)',
} as const;

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
} as const;

export const spacing = {
  containerMaxWidth: '1280px',
  sectionPaddingX: { mobile: '1rem', tablet: '2rem', desktop: '3rem' },
} as const;

export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  glow: '0 0 24px rgba(59, 130, 246, 0.35)',
  glowViolet: '0 0 24px rgba(124, 58, 237, 0.35)',
  card: '0 4px 24px rgba(0, 0, 0, 0.4)',
  cardHover: '0 8px 40px rgba(0, 0, 0, 0.6)',
} as const;

export const animation = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
} as const;

// Tailwind-compatible token object (used in tailwind.config.js extend)
export const tailwindTokens = {
  colors: {
    brand: colors.brand,
    neutral: colors.neutral,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  },
  fontFamily: typography.fontFamily,
  borderRadius,
  boxShadow: {
    glow: shadows.glow,
    'glow-violet': shadows.glowViolet,
    card: shadows.card,
    'card-hover': shadows.cardHover,
  },
} as const;
