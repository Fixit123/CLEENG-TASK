import type { Subscription } from '../types';
import {
  formatPrice,
  formatNextPaymentDate,
  capitalizeStatus,
} from '../utils/formatters';

interface SubscriptionCardProps {
  subscription: Subscription;
  onCancel?: (subscriptionId: string) => void;
}

function SubscriptionCard({ subscription, onCancel }: SubscriptionCardProps) {

  return (
    <div className="subscription-card">
      <h3 className="card-title">{subscription.offerTitle}</h3>
      <p className="card-info">
        Status:{' '}
        <span className={`status-badge status-${subscription.status}`}>
          {capitalizeStatus(subscription.status)}
        </span>
      </p>
      <p className="card-info">Price: {formatPrice(subscription.price, subscription.currency)}</p>
      <p className="card-info">{formatNextPaymentDate(subscription.nextPaymentDate)}</p>
      
      {subscription.status === 'active' && onCancel && (
        <button
          className="cancel-button"
          onClick={() => onCancel(subscription.id)}
        >
          Cancel
        </button>
      )}
      
      {subscription.status === 'cancelled' && (
        <button
          className="cancel-button cancel-button-disabled"
          disabled
        >
          Cancelled
        </button>
      )}
    </div>
  );
}

export default SubscriptionCard;

