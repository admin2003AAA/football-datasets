import { Router, Request, Response } from 'express';
import { authenticate, requireRole } from '../common/guards/auth.guard';

export const settingsRouter = Router();

// Stub in-memory settings
const platformSettings = {
  siteName: 'NovaStream',
  siteUrl: 'https://novastream.tv',
  supportEmail: 'support@novastream.tv',
  maintenanceMode: false,
  allowRegistration: true,
  defaultPlanId: 'free',
  maxConcurrentStreams: 4,
  featuredChannelIds: ['ch-001', 'ch-002', 'ch-003'],
};

// GET /api/v1/settings — public metadata
settingsRouter.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      siteName: platformSettings.siteName,
      supportEmail: platformSettings.supportEmail,
      maintenanceMode: platformSettings.maintenanceMode,
      allowRegistration: platformSettings.allowRegistration,
    },
  });
});

// GET /api/v1/settings/admin — full settings, admin only
settingsRouter.get('/admin', authenticate, requireRole('admin'), (_req: Request, res: Response) => {
  res.json({ success: true, data: platformSettings });
});

// PATCH /api/v1/settings — update settings, admin only
settingsRouter.patch('/', authenticate, requireRole('admin'), (req: Request, res: Response) => {
  const updates = req.body as Partial<typeof platformSettings>;
  Object.assign(platformSettings, updates);
  res.json({ success: true, data: platformSettings });
});
