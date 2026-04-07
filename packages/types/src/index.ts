// ─── User & Auth Types ────────────────────────────────────────────────────────

export type UserRole =
  | 'super_admin'
  | 'admin'
  | 'editor'
  | 'support'
  | 'analyst'
  | 'moderator'
  | 'subscriber'
  | 'guest';

export type SubscriptionStatus = 'active' | 'inactive' | 'cancelled' | 'trial' | 'expired';

export interface User {
  id: string;
  email: string;
  name: string;
  nameAr?: string;
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

// ─── RBAC — Roles & Permissions ───────────────────────────────────────────────

export type Permission =
  | 'users:read'
  | 'users:write'
  | 'users:delete'
  | 'content:read'
  | 'content:write'
  | 'content:delete'
  | 'subscriptions:read'
  | 'subscriptions:write'
  | 'epg:read'
  | 'epg:write'
  | 'analytics:read'
  | 'settings:read'
  | 'settings:write'
  | 'roles:read'
  | 'roles:write';

export interface RoleDefinition {
  id: UserRole;
  nameAr: string;
  nameEn: string;
  description: string;
  permissions: Permission[];
  color: string;
}

export interface RoleAssignment {
  userId: string;
  role: UserRole;
  assignedBy: string;
  assignedAt: string;
}

// ─── Channel & Content Types ─────────────────────────────────────────────────

export type ContentType = 'live' | 'vod' | 'series' | 'documentary';
export type StreamStatus = 'live' | 'offline' | 'scheduled' | 'replay';
export type ContentRating = 'G' | 'PG' | 'PG-13' | 'R' | 'TV-MA';

export interface Channel {
  id: string;
  name: string;
  nameAr?: string;
  slug: string;
  description: string;
  descriptionAr?: string;
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
  titleAr?: string;
  slug: string;
  description: string;
  descriptionAr?: string;
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
  nameAr?: string;
  slug: string;
  iconUrl?: string;
}

// ─── EPG / Program Guide Types ────────────────────────────────────────────────

export interface EpgChannel {
  id: string;
  channelId: string;           // references Channel.id
  name: string;
  nameAr: string;
  logoUrl: string;
  number: number;              // channel number in guide
  category: string;
}

export interface EpgProgram {
  id: string;
  channelId: string;           // references EpgChannel.id
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  startTime: string;           // ISO 8601
  endTime: string;             // ISO 8601
  genre: string;
  rating?: ContentRating;
  isLive?: boolean;
  isCatchup?: boolean;         // replay available
  thumbnailUrl?: string;
}

export interface EpgSchedule {
  channelId: string;
  date: string;                // YYYY-MM-DD
  programs: EpgProgram[];
}

export interface EpgGuide {
  channels: EpgChannel[];
  schedules: EpgSchedule[];
  generatedAt: string;
}

// ─── Subscription & Plans ─────────────────────────────────────────────────────

export type BillingPeriod = 'monthly' | 'quarterly' | 'annual';
export type Currency = 'USD' | 'IQD' | 'EUR';

export interface Plan {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  description: string;
  descriptionAr: string;
  price: number;
  priceIqd?: number;
  currency: Currency;
  billingPeriod: BillingPeriod;
  features: PlanFeature[];
  maxStreams: number;
  maxDevices: number;
  qualityOptions: VideoQuality[];
  entitlements: Entitlement[];
  isPopular?: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PlanFeature {
  label: string;
  labelAr?: string;
  included: boolean;
}

export interface Entitlement {
  key: string;
  value: boolean | number | string;
  description: string;
}

export type VideoQuality = '480p' | '720p' | '1080p' | '4K';

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  planName: string;
  status: SubscriptionStatus;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  currency: Currency;
  amountPaid: number;
  paymentMethod?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Analytics Types ──────────────────────────────────────────────────────────

export interface AnalyticsSummary {
  totalUsers: number;
  activeSubscribers: number;
  totalRevenue: number;
  totalRevenueIqd: number;
  totalStreams: number;
  avgWatchTime: number;
  newUsersThisMonth: number;
  churnRate: number;
  peakConcurrentViewers: number;
  satisfactionScore: number;
}

export interface AnalyticsDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface TopContent {
  contentId: string;
  title: string;
  titleAr?: string;
  viewCount: number;
  watchTimeMinutes: number;
  trend: string;
}

export interface SubscriptionMetrics {
  planId: string;
  planName: string;
  count: number;
  revenue: number;
  percentageOfTotal: number;
}

export interface AudienceMetrics {
  totalViewers: number;
  activeViewers: number;
  newViewers: number;
  returningViewers: number;
  averageSessionMinutes: number;
  peakHour: string;
  topCountries: { country: string; viewers: number }[];
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
  siteNameAr: string;
  siteUrl: string;
  supportEmail: string;
  defaultLanguage: 'ar' | 'en';
  maintenanceMode: boolean;
  allowRegistration: boolean;
  defaultPlanId?: string;
  maxConcurrentStreams: number;
  featuredChannelIds: string[];
  primaryCurrency: Currency;
}
