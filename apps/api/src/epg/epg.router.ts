import { Router, Request, Response } from 'express';
import {
  getAllEpgChannels,
  getEpgChannelById,
  getScheduleForDate,
  getScheduleForChannel,
  getFullGuide,
  getLivePrograms,
} from './epg.store';
import { AppError } from '../common/middleware/error.middleware';

export const epgRouter = Router();

// GET /api/v1/epg/channels — list all EPG channels
epgRouter.get('/channels', (_req: Request, res: Response) => {
  res.json({ success: true, data: getAllEpgChannels() });
});

// GET /api/v1/epg/channels/:id — get EPG channel by id
epgRouter.get('/channels/:id', (req: Request, res: Response, next) => {
  const channel = getEpgChannelById(req.params['id']!);
  if (!channel) {
    const error: AppError = new Error('EPG channel not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }
  res.json({ success: true, data: channel });
});

// GET /api/v1/epg/guide?date=YYYY-MM-DD — full program guide for a date
epgRouter.get('/guide', (req: Request, res: Response) => {
  const date = (req.query['date'] as string | undefined) ?? new Date().toISOString().slice(0, 10);
  res.json({ success: true, data: getFullGuide(date) });
});

// GET /api/v1/epg/schedule?date=YYYY-MM-DD — schedules for all channels
epgRouter.get('/schedule', (req: Request, res: Response) => {
  const date = (req.query['date'] as string | undefined) ?? new Date().toISOString().slice(0, 10);
  res.json({ success: true, data: getScheduleForDate(date) });
});

// GET /api/v1/epg/schedule/:channelId?date=YYYY-MM-DD — schedule for one channel
epgRouter.get('/schedule/:channelId', (req: Request, res: Response, next) => {
  const date = (req.query['date'] as string | undefined) ?? new Date().toISOString().slice(0, 10);
  const schedule = getScheduleForChannel(req.params['channelId']!, date);
  if (!schedule) {
    const error: AppError = new Error('Schedule not found for this channel.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }
  res.json({ success: true, data: schedule });
});

// GET /api/v1/epg/live — currently live programs
epgRouter.get('/live', (_req: Request, res: Response) => {
  res.json({ success: true, data: getLivePrograms() });
});
