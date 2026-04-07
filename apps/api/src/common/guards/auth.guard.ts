import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from './error.middleware';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export function authenticate(req: AuthRequest, _res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  if (!authHeader?.startsWith('Bearer ')) {
    const error: AppError = new Error('Authentication required.');
    error.statusCode = 401;
    error.code = 'UNAUTHORIZED';
    return next(error);
  }

  const token = authHeader.slice(7);
  try {
    const secret = process.env['JWT_SECRET'] ?? 'dev-secret';
    const payload = jwt.verify(token, secret) as { id: string; email: string; role: string };
    req.user = payload;
    next();
  } catch {
    const error: AppError = new Error('Invalid or expired token.');
    error.statusCode = 401;
    error.code = 'TOKEN_INVALID';
    next(error);
  }
}

export function requireRole(...roles: string[]) {
  return (req: AuthRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      const error: AppError = new Error('Authentication required.');
      error.statusCode = 401;
      error.code = 'UNAUTHORIZED';
      return next(error);
    }
    if (!roles.includes(req.user.role)) {
      const error: AppError = new Error('Insufficient permissions.');
      error.statusCode = 403;
      error.code = 'FORBIDDEN';
      return next(error);
    }
    next();
  };
}
