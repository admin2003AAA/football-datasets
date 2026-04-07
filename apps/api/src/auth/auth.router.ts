import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { findUserByEmail, verifyPassword, createUser } from './auth.store';
import { authenticate, AuthRequest } from '../common/guards/auth.guard';
import { AppError } from '../common/middleware/error.middleware';

export const authRouter = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  password: z.string().min(8),
});

function signTokens(userId: string, email: string, role: string) {
  const secret = process.env['JWT_SECRET'] ?? 'dev-secret';
  const refreshSecret = process.env['JWT_REFRESH_SECRET'] ?? 'dev-refresh-secret';

  const accessToken = jwt.sign({ id: userId, email, role }, secret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: userId, email, role }, refreshSecret, { expiresIn: '7d' });

  return { accessToken, refreshToken, expiresIn: 900 };
}

// POST /api/v1/auth/login
authRouter.post('/login', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    const user = findUserByEmail(email);
    if (!user || !verifyPassword(email, password)) {
      const error: AppError = new Error('Invalid email or password.');
      error.statusCode = 401;
      error.code = 'INVALID_CREDENTIALS';
      return next(error);
    }

    const tokens = signTokens(user.id, user.email, user.role);
    res.json({
      success: true,
      data: { user, tokens },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const error: AppError = new Error('Validation failed.');
      error.statusCode = 422;
      error.code = 'VALIDATION_ERROR';
      return next(error);
    }
    next(err);
  }
});

// POST /api/v1/auth/register
authRouter.post('/register', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = registerSchema.parse(req.body);

    if (findUserByEmail(email)) {
      const error: AppError = new Error('An account with this email already exists.');
      error.statusCode = 409;
      error.code = 'DUPLICATE_EMAIL';
      return next(error);
    }

    const user = createUser(name, email, password);
    const tokens = signTokens(user.id, user.email, user.role);

    res.status(201).json({
      success: true,
      data: { user, tokens },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const error: AppError = new Error('Validation failed.');
      error.statusCode = 422;
      error.code = 'VALIDATION_ERROR';
      return next(error);
    }
    next(err);
  }
});

// GET /api/v1/auth/me
authRouter.get('/me', authenticate, (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const user = findUserByEmail(req.user!.email);
    if (!user) {
      const error: AppError = new Error('User not found.');
      error.statusCode = 404;
      error.code = 'NOT_FOUND';
      return next(error);
    }
    res.json({ success: true, data: { user } });
  } catch (err) {
    next(err);
  }
});

// POST /api/v1/auth/refresh
authRouter.post('/refresh', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body as { refreshToken?: string };
    if (!refreshToken) {
      const error: AppError = new Error('Refresh token required.');
      error.statusCode = 400;
      error.code = 'VALIDATION_ERROR';
      return next(error);
    }

    const refreshSecret = process.env['JWT_REFRESH_SECRET'] ?? 'dev-refresh-secret';
    const payload = jwt.verify(refreshToken, refreshSecret) as {
      id: string;
      email: string;
      role: string;
    };

    const tokens = signTokens(payload.id, payload.email, payload.role);
    res.json({ success: true, data: { tokens } });
  } catch {
    const error: AppError = new Error('Invalid or expired refresh token.');
    error.statusCode = 401;
    error.code = 'TOKEN_INVALID';
    next(error);
  }
});

// POST /api/v1/auth/logout
authRouter.post('/logout', authenticate, (_req: AuthRequest, res: Response) => {
  // In production: invalidate the refresh token in DB/Redis
  res.json({ success: true, data: { message: 'Logged out successfully.' } });
});
