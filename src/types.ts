/**
 * Subscription status type
 * Can be 'active' or 'cancelled'
 */
export type SubscriptionStatus = 'active' | 'cancelled';

/**
 * Subscription interface
 * Represents a subscription object with all required fields
 */
export interface Subscription {
  id: string;
  offerTitle: string;
  status: SubscriptionStatus;
  price: number;
  currency: string;
  nextPaymentDate: string; // ISO 8601 date string
}

