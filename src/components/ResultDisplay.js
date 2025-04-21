export default function ResultDisplay({ prediction }) {
  // Helper function to format USD value with 'K' suffix
  const formatUsd = (value) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  // Helper function to format NPR value
  const formatNpr = (value) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
    }).format(value);
  };

  // Convert prediction (100k USD multiples) to USD value
  const usdValue = prediction * 100000; // e.g., 2 becomes 200000 USD
  
  // Format USD value with 'K' suffix
  const formattedUsd = formatUsd(usdValue);
  
  // Convert USD to NPR (1 USD = 120 NPR)
  const exchangeRate = 120;
  const nprValue = usdValue * exchangeRate;
  
  // Format NPR value
  const formattedNpr = formatNpr(nprValue);

  return (
    <div className="mt-8 p-6 bg-indigo-50 rounded-lg border border-indigo-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Estimated Property Value</h3>
      <div className="text-3xl font-bold text-indigo-700">
        {formattedUsd} / {formattedNpr}
      </div>
      <p className="mt-2 text-gray-600">
        This estimate is based on the property details you provided and our machine learning model.
      </p>
    </div>
  );
}