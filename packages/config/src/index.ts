// ─── NovaStream Shared Configuration ─────────────────────────────────────────

// App info
export const APP_NAME = 'NovaStream';
export const APP_TAGLINE = 'Premium Legal Live Streaming';
export const APP_VERSION = '1.0.0';

// Pagination defaults
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// Token expiry
export const ACCESS_TOKEN_EXPIRY = '15m';
export const REFRESH_TOKEN_EXPIRY = '7d';

// Supported video qualities in order of preference
export const VIDEO_QUALITIES = ['4K', '1080p', '720p', '480p'] as const;

// Content categories
export const CONTENT_CATEGORIES = [
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'news', name: 'News', icon: '📰' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
  { id: 'movies', name: 'Movies', icon: '🎥' },
  { id: 'series', name: 'Series', icon: '📺' },
  { id: 'documentary', name: 'Documentary', icon: '🎞️' },
  { id: 'kids', name: 'Kids', icon: '🧸' },
  { id: 'music', name: 'Music', icon: '🎵' },
] as const;

// Subscription plan IDs
export const PLAN_IDS = {
  FREE: 'free',
  BASIC: 'basic',
  STANDARD: 'standard',
  PREMIUM: 'premium',
} as const;

// Device types supported
export const SUPPORTED_DEVICES = [
  { id: 'web', name: 'Web Browser', icon: 'monitor' },
  { id: 'mobile', name: 'Mobile', icon: 'smartphone' },
  { id: 'tablet', name: 'Tablet', icon: 'tablet' },
  { id: 'smart-tv', name: 'Smart TV', icon: 'tv' },
  { id: 'firestick', name: 'Fire Stick', icon: 'wifi' },
  { id: 'apple-tv', name: 'Apple TV', icon: 'airplay' },
] as const;

// Navigation links for web app
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Live', href: '/live' },
  { label: 'Channels', href: '/channels' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Devices', href: '/devices' },
  { label: 'Support', href: '/support' },
] as const;

// Admin navigation
export const ADMIN_NAV_LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: 'layout-dashboard' },
  { label: 'Users', href: '/dashboard/users', icon: 'users' },
  { label: 'Content', href: '/dashboard/content', icon: 'film' },
  { label: 'Subscriptions', href: '/dashboard/subscriptions', icon: 'credit-card' },
  { label: 'Analytics', href: '/dashboard/analytics', icon: 'bar-chart-2' },
  { label: 'Settings', href: '/dashboard/settings', icon: 'settings' },
] as const;

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// API error codes
export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  DUPLICATE_EMAIL: 'DUPLICATE_EMAIL',
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  TOKEN_INVALID: 'TOKEN_INVALID',
  SUBSCRIPTION_REQUIRED: 'SUBSCRIPTION_REQUIRED',
  SUBSCRIPTION_EXPIRED: 'SUBSCRIPTION_EXPIRED',
  MAX_STREAMS_REACHED: 'MAX_STREAMS_REACHED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

// Utility: build pagination metadata
export function buildPagination(page: number, limit: number, total: number) {
  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };
}

// Utility: sanitize pagination params
export function parsePaginationParams(
  queryPage?: string | number,
  queryLimit?: string | number
): { page: number; limit: number } {
  const page = Math.max(1, parseInt(String(queryPage ?? 1), 10) || 1);
  const limit = Math.min(
    MAX_PAGE_SIZE,
    Math.max(1, parseInt(String(queryLimit ?? DEFAULT_PAGE_SIZE), 10) || DEFAULT_PAGE_SIZE)
  );
  return { page, limit };
}
