// ─── IRAQ TV Shared Configuration ────────────────────────────────────────────

// App info
export const APP_NAME = 'IRAQ TV';
export const APP_TAGLINE = 'قناة العراق — بث مباشر قانوني';
export const APP_TAGLINE_EN = 'Iraq TV — Premium Legal Live Streaming';
export const APP_VERSION = '2.0.0';

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
  { id: 'sports', name: 'الرياضة', nameEn: 'Sports', icon: '⚽' },
  { id: 'news', name: 'الأخبار', nameEn: 'News', icon: '📰' },
  { id: 'entertainment', name: 'الترفيه', nameEn: 'Entertainment', icon: '🎬' },
  { id: 'movies', name: 'الأفلام', nameEn: 'Movies', icon: '🎥' },
  { id: 'series', name: 'المسلسلات', nameEn: 'Series', icon: '📺' },
  { id: 'documentary', name: 'الوثائقية', nameEn: 'Documentary', icon: '🎞️' },
  { id: 'kids', name: 'الأطفال', nameEn: 'Kids', icon: '🧸' },
  { id: 'music', name: 'الموسيقى', nameEn: 'Music', icon: '🎵' },
  { id: 'religion', name: 'الديني', nameEn: 'Religious', icon: '🕌' },
  { id: 'culture', name: 'الثقافة', nameEn: 'Culture', icon: '🏛️' },
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
  { label: 'الرئيسية', labelEn: 'Home', href: '/' },
  { label: 'البث المباشر', labelEn: 'Live', href: '/live' },
  { label: 'القنوات', labelEn: 'Channels', href: '/channels' },
  { label: 'جدول البرامج', labelEn: 'Program Guide', href: '/epg' },
  { label: 'الأسعار', labelEn: 'Pricing', href: '/pricing' },
  { label: 'الأجهزة', labelEn: 'Devices', href: '/devices' },
  { label: 'الدعم', labelEn: 'Support', href: '/support' },
] as const;

// Admin navigation
export const ADMIN_NAV_LINKS = [
  { label: 'لوحة التحكم', labelEn: 'Dashboard', href: '/dashboard', icon: 'layout-dashboard' },
  { label: 'المستخدمون', labelEn: 'Users', href: '/dashboard/users', icon: 'users' },
  { label: 'المحتوى', labelEn: 'Content', href: '/dashboard/content', icon: 'film' },
  { label: 'الاشتراكات', labelEn: 'Subscriptions', href: '/dashboard/subscriptions', icon: 'credit-card' },
  { label: 'جدول البرامج', labelEn: 'EPG', href: '/dashboard/epg', icon: 'calendar' },
  { label: 'التحليلات', labelEn: 'Analytics', href: '/dashboard/analytics', icon: 'bar-chart-2' },
  { label: 'الأدوار والصلاحيات', labelEn: 'Roles & Permissions', href: '/dashboard/roles', icon: 'shield' },
  { label: 'الإعدادات', labelEn: 'Settings', href: '/dashboard/settings', icon: 'settings' },
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
