import { Router, Request, Response } from 'express';
import { authenticate, requireRole } from '../common/guards/auth.guard';

export const analyticsRouter = Router();

// All analytics require admin access
analyticsRouter.use(authenticate, requireRole('admin', 'moderator'));

// GET /api/v1/analytics/summary
analyticsRouter.get('/summary', (_req: Request, res: Response) => {
  // In production: aggregate from database/data warehouse
  res.json({
    success: true,
    data: {
      totalUsers: 12480,
      activeSubscribers: 8920,
      totalRevenue: 178400,
      totalStreams: 284300,
      avgWatchTime: 87,           // minutes
      newUsersThisMonth: 340,
      churnRate: 2.1,             // percent
    },
  });
});

// GET /api/v1/analytics/viewers
analyticsRouter.get('/viewers', (req: Request, res: Response) => {
  const days = parseInt(String(req.query['days'] ?? 7), 10);
  const data = Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    return {
      date: date.toISOString().split('T')[0],
      value: Math.floor(6000 + Math.random() * 4000),
    };
  });
  res.json({ success: true, data });
});

// GET /api/v1/analytics/revenue
analyticsRouter.get('/revenue', (req: Request, res: Response) => {
  const months = parseInt(String(req.query['months'] ?? 6), 10);
  const data = Array.from({ length: months }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (months - 1 - i));
    const monthLabel = date.toLocaleString('default', { month: 'short', year: 'numeric' });
    return {
      date: monthLabel,
      value: Math.floor(15000 + Math.random() * 10000),
    };
  });
  res.json({ success: true, data });
});

// GET /api/v1/analytics/top-content
analyticsRouter.get('/top-content', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: [
      { contentId: 'ch-001', title: 'Nova Sports 1', viewCount: 14500, watchTimeMinutes: 1250000 },
      { contentId: 'ch-002', title: 'Nova Sports 2', viewCount: 8200, watchTimeMinutes: 710000 },
      { contentId: 'ch-003', title: 'Nova Cinema', viewCount: 6100, watchTimeMinutes: 540000 },
      { contentId: 'cnt-001', title: 'Champions League Highlights', viewCount: 120000, watchTimeMinutes: 4800000 },
      { contentId: 'ch-006', title: 'Nova Kids', viewCount: 4800, watchTimeMinutes: 384000 },
    ],
  });
});
