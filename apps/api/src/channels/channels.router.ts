import { Router, Request, Response, NextFunction } from 'express';
import { getAllChannels, getChannelBySlug, getAllContent, getContentBySlug } from './channels.store';
import { authenticate } from '../common/guards/auth.guard';
import { AppError } from '../common/middleware/error.middleware';
import { parsePaginationParams, buildPagination } from '@novastream/config';

export const channelsRouter = Router();

// GET /api/v1/channels
channelsRouter.get('/', (req: Request, res: Response) => {
  const { page, limit } = parsePaginationParams(req.query['page'] as string, req.query['limit'] as string);
  const category = req.query['category'] as string | undefined;
  const status = req.query['status'] as string | undefined;

  let channels = getAllChannels();
  if (category) channels = channels.filter((c) => c.category === category);
  if (status) channels = channels.filter((c) => c.streamStatus === status);

  const start = (page - 1) * limit;
  const data = channels.slice(start, start + limit);

  res.json({
    success: true,
    data,
    pagination: buildPagination(page, limit, channels.length),
  });
});

// GET /api/v1/channels/:slug
channelsRouter.get('/:slug', (req: Request, res: Response, next: NextFunction) => {
  const channel = getChannelBySlug(req.params['slug']!);
  if (!channel) {
    const error: AppError = new Error('Channel not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }
  res.json({ success: true, data: { channel } });
});

// GET /api/v1/channels/:slug/stream — returns HLS stream URL (auth required)
channelsRouter.get('/:slug/stream', authenticate, (req: Request, res: Response, next: NextFunction) => {
  const channel = getChannelBySlug(req.params['slug']!);
  if (!channel) {
    const error: AppError = new Error('Channel not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }
  if (channel.streamStatus !== 'live') {
    const error: AppError = new Error('Channel is not currently live.');
    error.statusCode = 400;
    error.code = 'STREAM_OFFLINE';
    return next(error);
  }
  // In production: generate a signed/expiring HLS URL
  res.json({
    success: true,
    data: {
      streamUrl: channel.streamUrl ?? `https://stream.novastream.tv/live/${channel.slug}/index.m3u8`,
      expiresAt: new Date(Date.now() + 4 * 3600 * 1000).toISOString(),
    },
  });
});

// GET /api/v1/channels/content — VOD catalog
channelsRouter.get('/catalog/content', (req: Request, res: Response) => {
  const { page, limit } = parsePaginationParams(req.query['page'] as string, req.query['limit'] as string);
  const genre = req.query['genre'] as string | undefined;

  let content = getAllContent();
  if (genre) content = content.filter((c) => c.genre.includes(genre));

  const start = (page - 1) * limit;
  const data = content.slice(start, start + limit);

  res.json({
    success: true,
    data,
    pagination: buildPagination(page, limit, content.length),
  });
});

// GET /api/v1/channels/content/:slug
channelsRouter.get('/catalog/content/:slug', (req: Request, res: Response, next: NextFunction) => {
  const item = getContentBySlug(req.params['slug']!);
  if (!item) {
    const error: AppError = new Error('Content not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }
  res.json({ success: true, data: { content: item } });
});
