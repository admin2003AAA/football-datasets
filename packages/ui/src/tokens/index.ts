// ─── IRAQ TV Design Tokens ────────────────────────────────────────────────────
// These tokens are consumed by Tailwind config and CSS custom properties.

export const colors = {
  // Brand palette — IRAQ TV
  brand: {
    red: '#C41E3A',        // IRAQ TV Red — primary
    redDark: '#9B1729',
    redLight: '#E63946',
    gold: '#D4AF37',       // IRAQ TV Gold — accent
    goldDark: '#B8962E',
    goldLight: '#F4D35E',
    green: '#1A7A3C',      // IRAQ TV Green — secondary accent
    greenLight: '#2ECC71',
  },

  // Neutral / dark theme
  neutral: {
    950: '#080810',   // deepest background
    900: '#0D0D18',   // primary background
    850: '#111120',   // card background
    800: '#181828',   // elevated surface
    700: '#222236',   // border / divider
    600: '#363654',   // muted border
    500: '#6A6A90',   // disabled text
    400: '#9A9AB8',   // secondary text
    300: '#C2C2D8',   // body text
    200: '#E0E0F0',   // heading text
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
  brand: 'linear-gradient(135deg, #C41E3A 0%, #D4AF37 100%)',
  brandSubtle: 'linear-gradient(135deg, rgba(196,30,58,0.15) 0%, rgba(212,175,55,0.15) 100%)',
  hero: 'linear-gradient(180deg, rgba(8,8,16,0) 0%, rgba(8,8,16,0.8) 60%, rgba(8,8,16,1) 100%)',
  card: 'linear-gradient(145deg, rgba(24,24,40,0.9) 0%, rgba(17,17,32,0.95) 100%)',
  iraqi: 'linear-gradient(135deg, #C41E3A 0%, #1A7A3C 50%, #D4AF37 100%)',
} as const;

export const typography = {
  fontFamily: {
    sans: ['Inter', 'Noto Sans Arabic', 'system-ui', 'sans-serif'],
    arabic: ['Noto Sans Arabic', 'Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
    display: ['Cal Sans', 'Inter', 'Noto Sans Arabic', 'system-ui', 'sans-serif'],
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
  glow: '0 0 24px rgba(196, 30, 58, 0.35)',
  glowGold: '0 0 24px rgba(212, 175, 55, 0.35)',
  glowGreen: '0 0 24px rgba(26, 122, 60, 0.35)',
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
    'glow-gold': shadows.glowGold,
    'glow-green': shadows.glowGreen,
    card: shadows.card,
    'card-hover': shadows.cardHover,
  },
} as const;
