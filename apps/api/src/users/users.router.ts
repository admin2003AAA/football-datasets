import { Router, Response, NextFunction } from 'express';
import { getAllUsers, findUserById } from '../auth/auth.store';
import { authenticate, requireRole, AuthRequest } from '../common/guards/auth.guard';
import { AppError } from '../common/middleware/error.middleware';
import { parsePaginationParams, buildPagination } from '@novastream/config';

export const usersRouter = Router();

// All user routes require authentication
usersRouter.use(authenticate);

// GET /api/v1/users — admin only
usersRouter.get('/', requireRole('admin', 'moderator'), (req: AuthRequest, res: Response) => {
  const { page, limit } = parsePaginationParams(req.query['page'] as string, req.query['limit'] as string);
  const allUsers = getAllUsers();
  const start = (page - 1) * limit;
  const data = allUsers.slice(start, start + limit);

  res.json({
    success: true,
    data,
    pagination: buildPagination(page, limit, allUsers.length),
  });
});

// GET /api/v1/users/:id
usersRouter.get('/:id', (req: AuthRequest, res: Response, next: NextFunction) => {
  const { id } = req.params;

  // Users can only read their own profile unless admin
  if (req.user!.role !== 'admin' && req.user!.id !== id) {
    const error: AppError = new Error('Insufficient permissions.');
    error.statusCode = 403;
    error.code = 'FORBIDDEN';
    return next(error);
  }

  const user = findUserById(id);
  if (!user) {
    const error: AppError = new Error('User not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }

  res.json({ success: true, data: { user } });
});

// PATCH /api/v1/users/:id — update profile
usersRouter.patch('/:id', (req: AuthRequest, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (req.user!.role !== 'admin' && req.user!.id !== id) {
    const error: AppError = new Error('Insufficient permissions.');
    error.statusCode = 403;
    error.code = 'FORBIDDEN';
    return next(error);
  }

  const user = findUserById(id);
  if (!user) {
    const error: AppError = new Error('User not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }

  // In production: apply validated fields from req.body and persist to DB
  const updated = {
    ...user,
    name: (req.body as { name?: string }).name ?? user.name,
    updatedAt: new Date().toISOString(),
  };

  res.json({ success: true, data: { user: updated } });
});

// DELETE /api/v1/users/:id — admin only
usersRouter.delete('/:id', requireRole('admin'), (req: AuthRequest, res: Response, next: NextFunction) => {
  const user = findUserById(req.params['id']!);
  if (!user) {
    const error: AppError = new Error('User not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }
  // In production: soft-delete in database
  res.json({ success: true, data: { message: 'User deleted.' } });
});
