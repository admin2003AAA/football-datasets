import { Router, Request, Response, NextFunction } from 'express';
import { getAllPlans, getPlanById } from './subscriptions.store';
import { AppError } from '../common/middleware/error.middleware';

export const subscriptionsRouter = Router();

// GET /api/v1/subscriptions/plans
subscriptionsRouter.get('/plans', (_req: Request, res: Response) => {
  res.json({ success: true, data: getAllPlans() });
});

// GET /api/v1/subscriptions/plans/:id
subscriptionsRouter.get('/plans/:id', (req: Request, res: Response, next: NextFunction) => {
  const plan = getPlanById(req.params['id']!);
  if (!plan) {
    const error: AppError = new Error('Plan not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }
  res.json({ success: true, data: { plan } });
});

// POST /api/v1/subscriptions — create/upgrade subscription (stub)
subscriptionsRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { planId, userId } = req.body as { planId?: string; userId?: string };

  if (!planId || !userId) {
    const error: AppError = new Error('planId and userId are required.');
    error.statusCode = 400;
    error.code = 'VALIDATION_ERROR';
    return next(error);
  }

  const plan = getPlanById(planId);
  if (!plan) {
    const error: AppError = new Error('Plan not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }

  // In production: integrate with Stripe/payment processor and persist to DB
  res.status(201).json({
    success: true,
    data: {
      subscription: {
        id: `sub-${Date.now()}`,
        userId,
        planId,
        status: 'active',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
        autoRenew: true,
      },
      message: 'Subscription created. Integrate payment processor for production.',
    },
  });
});
