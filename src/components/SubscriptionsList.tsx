import { useEffect } from 'react';
import SubscriptionCard from './SubscriptionCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchSubscriptionsAsync, cancelSubscription } from '../store/subscriptionsSlice';

function SubscriptionsList() {
  const subscriptions = useAppSelector((state) => state.subscriptions.subscriptions);
  const loading = useAppSelector((state) => state.subscriptions.loading);
  const error = useAppSelector((state) => state.subscriptions.error);
  const dispatch = useAppDispatch();

  const handleCancelSubscription = (subscriptionId: string) => {
    dispatch(cancelSubscription(subscriptionId));
  };

  useEffect(() => {
    dispatch(fetchSubscriptionsAsync());
  }, [dispatch]);

  return (
    <div className="subscriptions-list">
      <h2>My Subscriptions</h2>
      
      {/* Display loading message while fetching data */}
      {loading && <p className="loading-message">Loading...</p>}
      
      {/* Display error message if an error occurred */}
      {error && <p className="error-message">Error: {error}</p>}
      
      {/* Display subscriptions list when data is loaded */}
      {!loading && !error && subscriptions && (
        <div className="subscriptions-container">
          {subscriptions.map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
              onCancel={handleCancelSubscription}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SubscriptionsList;

