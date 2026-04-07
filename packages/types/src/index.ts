// ─── User & Auth Types ────────────────────────────────────────────────────────

export type UserRole = 'admin' | 'moderator' | 'subscriber' | 'guest';

export type SubscriptionStatus = 'active' | 'inactive' | 'cancelled' | 'trial' | 'expired';

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: UserRole;
  subscription?: UserSubscription;
  createdAt: string;
  updatedAt: string;
}

export interface UserSubscription {
  planId: string;
  planName: string;
  status: SubscriptionStatus;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

// ─── Channel & Content Types ─────────────────────────────────────────────────

export type ContentType = 'live' | 'vod' | 'series' | 'documentary';
export type StreamStatus = 'live' | 'offline' | 'scheduled' | 'replay';
export type ContentRating = 'G' | 'PG' | 'PG-13' | 'R' | 'TV-MA';

export interface Channel {
  id: string;
  name: string;
  slug: string;
  description: string;
  logoUrl: string;
  bannerUrl?: string;
  category: string;
  tags: string[];
  streamStatus: StreamStatus;
  streamUrl?: string;   // HLS endpoint for licensed streams
  viewerCount?: number;
  scheduledAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContentItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnailUrl: string;
  bannerUrl?: string;
  type: ContentType;
  rating?: ContentRating;
  duration?: number;       // seconds
  releaseYear?: number;
  genre: string[];
  tags: string[];
  channels: string[];      // channel IDs
  streamUrl?: string;
  isLicensed: boolean;
  requiredPlanId?: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconUrl?: string;
}

// ─── Subscription & Plans ─────────────────────────────────────────────────────

export type BillingPeriod = 'monthly' | 'quarterly' | 'annual';

export interface Plan {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  billingPeriod: BillingPeriod;
  features: PlanFeature[];
  maxStreams: number;
  maxDevices: number;
  qualityOptions: VideoQuality[];
  isPopular?: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PlanFeature {
  label: string;
  included: boolean;
}

export type VideoQuality = '480p' | '720p' | '1080p' | '4K';

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: SubscriptionStatus;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  paymentMethod?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Analytics Types ──────────────────────────────────────────────────────────

export interface AnalyticsSummary {
  totalUsers: number;
  activeSubscribers: number;
  totalRevenue: number;
  totalStreams: number;
  avgWatchTime: number;
  newUsersThisMonth: number;
  churnRate: number;
}

export interface AnalyticsDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface TopContent {
  contentId: string;
  title: string;
  viewCount: number;
  watchTimeMinutes: number;
}

// ─── API Response Wrappers ────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

// ─── Settings Types ───────────────────────────────────────────────────────────

export interface PlatformSettings {
  siteName: string;
  siteUrl: string;
  supportEmail: string;
  maintenanceMode: boolean;
  allowRegistration: boolean;
  defaultPlanId?: string;
  maxConcurrentStreams: number;
  featuredChannelIds: string[];
}
