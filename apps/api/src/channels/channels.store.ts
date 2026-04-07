import { Channel, ContentItem } from '@novastream/types';

// ─── Mock channel data ────────────────────────────────────────────────────────
// Replace with database queries in production.

export const mockChannels: Channel[] = [
  {
    id: 'ch-001',
    name: 'Nova Sports 1',
    slug: 'nova-sports-1',
    description: 'Live sports coverage — licensed rights',
    logoUrl: '/static/channels/nova-sports-1.png',
    category: 'sports',
    tags: ['football', 'live', 'hd'],
    streamStatus: 'live',
    viewerCount: 14500,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'ch-002',
    name: 'Nova Sports 2',
    slug: 'nova-sports-2',
    description: 'Premium sports — multi-sport coverage',
    logoUrl: '/static/channels/nova-sports-2.png',
    category: 'sports',
    tags: ['basketball', 'tennis', 'live'],
    streamStatus: 'live',
    viewerCount: 8200,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'ch-003',
    name: 'Nova Cinema',
    slug: 'nova-cinema',
    description: 'Licensed blockbusters and classics',
    logoUrl: '/static/channels/nova-cinema.png',
    category: 'entertainment',
    tags: ['movies', 'hd', '4k'],
    streamStatus: 'live',
    viewerCount: 6100,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'ch-004',
    name: 'Nova News',
    slug: 'nova-news',
    description: '24/7 licensed news coverage',
    logoUrl: '/static/channels/nova-news.png',
    category: 'news',
    tags: ['news', 'live', 'breaking'],
    streamStatus: 'live',
    viewerCount: 3200,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'ch-005',
    name: 'Nova Docs',
    slug: 'nova-docs',
    description: 'Award-winning documentaries',
    logoUrl: '/static/channels/nova-docs.png',
    category: 'documentary',
    tags: ['documentary', 'nature', 'history'],
    streamStatus: 'offline',
    scheduledAt: new Date(Date.now() + 3600 * 1000).toISOString(),
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'ch-006',
    name: 'Nova Kids',
    slug: 'nova-kids',
    description: 'Safe, fun content for children',
    logoUrl: '/static/channels/nova-kids.png',
    category: 'kids',
    tags: ['kids', 'cartoons', 'educational'],
    streamStatus: 'live',
    viewerCount: 4800,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
];

export const mockContent: ContentItem[] = [
  {
    id: 'cnt-001',
    title: 'Champions League Highlights',
    slug: 'champions-league-highlights',
    description: 'The best moments from this week\'s Champions League matches.',
    thumbnailUrl: '/static/content/cl-highlights.jpg',
    type: 'vod',
    duration: 3600,
    releaseYear: 2024,
    genre: ['sports', 'football'],
    tags: ['highlights', 'champions-league'],
    channels: ['ch-001'],
    isLicensed: true,
    requiredPlanId: 'basic',
    viewCount: 120000,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'cnt-002',
    title: 'The Grand Race',
    slug: 'the-grand-race',
    description: 'An epic motorsport documentary — fully licensed.',
    thumbnailUrl: '/static/content/grand-race.jpg',
    type: 'documentary',
    duration: 5400,
    releaseYear: 2023,
    genre: ['motorsport', 'documentary'],
    tags: ['racing', 'licensed'],
    channels: ['ch-005'],
    isLicensed: true,
    requiredPlanId: 'standard',
    viewCount: 45000,
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2024-03-01T00:00:00.000Z',
  },
];

export function getAllChannels(): Channel[] {
  return mockChannels;
}

export function getChannelBySlug(slug: string): Channel | undefined {
  return mockChannels.find((c) => c.slug === slug);
}

export function getAllContent(): ContentItem[] {
  return mockContent;
}

export function getContentBySlug(slug: string): ContentItem | undefined {
  return mockContent.find((c) => c.slug === slug);
}
