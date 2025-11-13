export function formatPrice(price: number, currency: string): string {
  if (currency === 'USD') {
    return `$${price.toFixed(2)}`;
  }
  return `${price.toFixed(2)} ${currency}`;
}

export function formatNextPaymentDate(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return `Renews on: ${formattedDate}`;
}

export function capitalizeStatus(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

