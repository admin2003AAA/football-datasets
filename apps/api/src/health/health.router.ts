import { Router, Request, Response } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      status: 'healthy',
      service: 'novastream-api',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
    },
  });
});

healthRouter.get('/ready', (_req: Request, res: Response) => {
  // In production: check DB, cache, etc.
  res.json({
    success: true,
    data: {
      status: 'ready',
      checks: {
        database: 'ok',  // placeholder
        cache: 'ok',     // placeholder
      },
    },
  });
});
