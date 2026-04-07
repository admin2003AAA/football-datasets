import { Router, Request, Response, NextFunction } from 'express';
import { getAllRoles, getRoleDefinition, hasPermission } from '../rbac/rbac';
import { AppError } from '../common/middleware/error.middleware';
import { UserRole, Permission } from '@novastream/types';

export const rolesRouter = Router();

// GET /api/v1/roles — list all role definitions
rolesRouter.get('/', (_req: Request, res: Response) => {
  res.json({ success: true, data: getAllRoles() });
});

// GET /api/v1/roles/:role — get a specific role definition
rolesRouter.get('/:role', (req: Request, res: Response, next: NextFunction) => {
  const role = req.params['role'] as UserRole;
  const definition = getRoleDefinition(role);
  if (!definition) {
    const error: AppError = new Error('Role not found.');
    error.statusCode = 404;
    error.code = 'NOT_FOUND';
    return next(error);
  }
  res.json({ success: true, data: definition });
});

// GET /api/v1/roles/:role/check?permission=users:write
rolesRouter.get('/:role/check', (req: Request, res: Response, next: NextFunction) => {
  const role = req.params['role'] as UserRole;
  const permission = req.query['permission'] as Permission | undefined;
  if (!permission) {
    const error: AppError = new Error('permission query parameter is required.');
    error.statusCode = 400;
    error.code = 'VALIDATION_ERROR';
    return next(error);
  }
  const allowed = hasPermission(role, permission);
  res.json({ success: true, data: { role, permission, allowed } });
});
