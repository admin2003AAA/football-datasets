import { v4 as uuidv4 } from 'uuid';
import { User, UserRole, SubscriptionStatus } from '@novastream/types';

// In-memory store — replace with a real database in production
const users: User[] = [
  {
    id: 'user-001',
    email: 'superadmin@iraqtv.iq',
    name: 'Super Admin',
    nameAr: 'المدير العام',
    role: 'super_admin' as UserRole,
    subscription: {
      planId: 'premium',
      planName: 'Premium',
      status: 'active',
      startDate: '2024-01-01T00:00:00.000Z',
      endDate: '2026-01-01T00:00:00.000Z',
      autoRenew: true,
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'user-002',
    email: 'admin@iraqtv.iq',
    name: 'Admin User',
    nameAr: 'مدير النظام',
    role: 'admin' as UserRole,
    subscription: {
      planId: 'premium',
      planName: 'Premium',
      status: 'active',
      startDate: '2024-01-01T00:00:00.000Z',
      endDate: '2025-01-01T00:00:00.000Z',
      autoRenew: true,
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'user-003',
    email: 'editor@iraqtv.iq',
    name: 'Content Editor',
    nameAr: 'محرر المحتوى',
    role: 'editor' as UserRole,
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2024-03-01T00:00:00.000Z',
  },
  {
    id: 'user-004',
    email: 'support@iraqtv.iq',
    name: 'Support Agent',
    nameAr: 'موظف الدعم',
    role: 'support' as UserRole,
    createdAt: '2024-03-15T00:00:00.000Z',
    updatedAt: '2024-03-15T00:00:00.000Z',
  },
  {
    id: 'user-005',
    email: 'analyst@iraqtv.iq',
    name: 'Data Analyst',
    nameAr: 'محلل البيانات',
    role: 'analyst' as UserRole,
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2024-04-01T00:00:00.000Z',
  },
  {
    id: 'user-006',
    email: 'ali@example.com',
    name: 'Ali Hassan',
    nameAr: 'علي حسن',
    role: 'subscriber' as UserRole,
    subscription: {
      planId: 'standard',
      planName: 'Standard',
      status: 'active',
      startDate: '2024-06-01T00:00:00.000Z',
      endDate: '2025-06-01T00:00:00.000Z',
      autoRenew: true,
    },
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2024-06-01T00:00:00.000Z',
  },
  {
    id: 'user-007',
    email: 'fatima@example.com',
    name: 'Fatima Al-Rashid',
    nameAr: 'فاطمة الراشد',
    role: 'subscriber' as UserRole,
    subscription: {
      planId: 'premium',
      planName: 'Premium',
      status: 'active',
      startDate: '2024-05-15T00:00:00.000Z',
      endDate: '2025-05-15T00:00:00.000Z',
      autoRenew: true,
    },
    createdAt: '2024-05-15T00:00:00.000Z',
    updatedAt: '2024-05-15T00:00:00.000Z',
  },
  {
    id: 'user-008',
    email: 'omar@example.com',
    name: 'Omar Al-Baghdadi',
    nameAr: 'عمر البغدادي',
    role: 'subscriber' as UserRole,
    subscription: {
      planId: 'basic',
      planName: 'Basic',
      status: 'trial',
      startDate: '2024-12-01T00:00:00.000Z',
      endDate: '2024-12-15T00:00:00.000Z',
      autoRenew: false,
    },
    createdAt: '2024-12-01T00:00:00.000Z',
    updatedAt: '2024-12-01T00:00:00.000Z',
  },
];

// Simulated password store (in prod: use bcrypt hashed passwords in DB)
const passwordStore: Record<string, string> = {
  'superadmin@iraqtv.iq': 'superadmin123',
  'admin@iraqtv.iq': 'admin123',
  'editor@iraqtv.iq': 'editor123',
  'support@iraqtv.iq': 'support123',
  'analyst@iraqtv.iq': 'analyst123',
  'ali@example.com': 'password123',
  'fatima@example.com': 'password123',
  'omar@example.com': 'password123',
};

export function findUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}

export function findUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}

export function verifyPassword(email: string, password: string): boolean {
  return passwordStore[email] === password;
}

export function createUser(name: string, email: string, password: string): User {
  const newUser: User = {
    id: uuidv4(),
    email,
    name,
    role: 'guest' as UserRole,
    subscription: {
      planId: 'free',
      planName: 'Free',
      status: 'trial' as SubscriptionStatus,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      autoRenew: false,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  users.push(newUser);
  passwordStore[email] = password;
  return newUser;
}export function getAllUsers(): User[] {
  return users;
}

export function getUserCount(): number {
  return users.length;
}
