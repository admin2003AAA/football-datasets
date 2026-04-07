import { UserRole, Permission, RoleDefinition } from '@novastream/types';

// ─── Role Definitions ─────────────────────────────────────────────────────────

export const ROLE_DEFINITIONS: Record<UserRole, RoleDefinition> = {
  super_admin: {
    id: 'super_admin',
    nameAr: 'المدير العام',
    nameEn: 'Super Admin',
    description: 'Full access to all platform features and settings.',
    color: '#C41E3A',
    permissions: [
      'users:read', 'users:write', 'users:delete',
      'content:read', 'content:write', 'content:delete',
      'subscriptions:read', 'subscriptions:write',
      'epg:read', 'epg:write',
      'analytics:read',
      'settings:read', 'settings:write',
      'roles:read', 'roles:write',
    ],
  },
  admin: {
    id: 'admin',
    nameAr: 'مدير',
    nameEn: 'Admin',
    description: 'Platform administration with limited destructive actions.',
    color: '#E63946',
    permissions: [
      'users:read', 'users:write',
      'content:read', 'content:write', 'content:delete',
      'subscriptions:read', 'subscriptions:write',
      'epg:read', 'epg:write',
      'analytics:read',
      'settings:read', 'settings:write',
      'roles:read',
    ],
  },
  editor: {
    id: 'editor',
    nameAr: 'محرر',
    nameEn: 'Editor',
    description: 'Can create and edit content and EPG schedules.',
    color: '#D4AF37',
    permissions: [
      'content:read', 'content:write',
      'epg:read', 'epg:write',
    ],
  },
  support: {
    id: 'support',
    nameAr: 'دعم فني',
    nameEn: 'Support',
    description: 'Can view users and subscriptions to provide customer support.',
    color: '#3B82F6',
    permissions: [
      'users:read',
      'subscriptions:read',
    ],
  },
  analyst: {
    id: 'analyst',
    nameAr: 'محلل',
    nameEn: 'Analyst',
    description: 'Read-only access to analytics and reports.',
    color: '#22C55E',
    permissions: [
      'analytics:read',
      'subscriptions:read',
      'content:read',
    ],
  },
  moderator: {
    id: 'moderator',
    nameAr: 'مشرف',
    nameEn: 'Moderator',
    description: 'Can moderate content and user reports.',
    color: '#F59E0B',
    permissions: [
      'users:read',
      'content:read', 'content:write',
    ],
  },
  subscriber: {
    id: 'subscriber',
    nameAr: 'مشترك',
    nameEn: 'Subscriber',
    description: 'Standard subscriber with streaming access.',
    color: '#9A9AB8',
    permissions: [
      'content:read',
    ],
  },
  guest: {
    id: 'guest',
    nameAr: 'زائر',
    nameEn: 'Guest',
    description: 'Unauthenticated or free-tier visitor.',
    color: '#6A6A90',
    permissions: [],
  },
};

/**
 * Returns true if a role includes a specific permission.
 */
export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_DEFINITIONS[role]?.permissions.includes(permission) ?? false;
}

/**
 * Returns all permissions for a given role.
 */
export function getPermissionsForRole(role: UserRole): Permission[] {
  return ROLE_DEFINITIONS[role]?.permissions ?? [];
}

/**
 * Returns all roles that include a specific permission.
 */
export function getRolesWithPermission(permission: Permission): UserRole[] {
  return (Object.values(ROLE_DEFINITIONS) as RoleDefinition[])
    .filter((r) => r.permissions.includes(permission))
    .map((r) => r.id);
}

/**
 * Returns all role definitions.
 */
export function getAllRoles(): RoleDefinition[] {
  return Object.values(ROLE_DEFINITIONS);
}

/**
 * Returns the role definition for a given role id.
 */
export function getRoleDefinition(role: UserRole): RoleDefinition | undefined {
  return ROLE_DEFINITIONS[role];
}
