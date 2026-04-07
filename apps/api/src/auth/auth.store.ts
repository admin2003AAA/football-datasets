import { v4 as uuidv4 } from 'uuid';
import { User, UserRole, SubscriptionStatus } from '@novastream/types';

// In-memory store — replace with a real database in production
const users: User[] = [
  {
    id: 'user-001',
    email: 'admin@novastream.tv',
    name: 'Admin User',
    role: 'admin',
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
    id: 'user-002',
    email: 'john@example.com',
    name: 'John Doe',
    role: 'subscriber',
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
];

// Simulated password store (in prod: use bcrypt hashed passwords in DB)
const passwordStore: Record<string, string> = {
  'admin@novastream.tv': 'admin123',
  'john@example.com': 'password123',
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
}

export function getAllUsers(): User[] {
  return users;
}

export function getUserCount(): number {
  return users.length;
}
