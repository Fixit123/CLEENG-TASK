import type { Subscription } from './types';

export const mockSubscriptions: Subscription[] = [
  {
    id: 'S12345',
    offerTitle: 'Premium Monthly',
    status: 'active',
    price: 12.99,
    currency: 'USD',
    nextPaymentDate: '2025-11-15T10:00:00Z',
  },
  {
    id: 'S67890',
    offerTitle: 'Sports Pass - Annual',
    status: 'active',
    price: 99.99,
    currency: 'USD',
    nextPaymentDate: '2026-08-01T10:00:00Z',
  },
  {
    id: 'S11111',
    offerTitle: 'Entertainment Bundle',
    status: 'active',
    price: 19.99,
    currency: 'USD',
    nextPaymentDate: '2025-12-20T10:00:00Z',
  },
];

export async function fetchSubscriptions(): Promise<Subscription[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockSubscriptions;
}

