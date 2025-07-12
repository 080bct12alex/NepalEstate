export default function ResultDisplay({ prediction }) {
  const priceMean = 	33447561.18541409; //  Replace with your real trainingdata
  const priceStd = 17978514.34627327;   

  // Convert standardized prediction back to original price
  const actualPrice = prediction * priceStd + priceMean;

  // Format USD value with 'K' suffix
  const formatUsd = (value) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  // Format NPR value
  const formatNpr = (value) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
    }).format(value);
  };

  // Convert to USD and NPR
  const usdValue = actualPrice / 120; // Assuming 1 USD = 120 NPR
  const formattedUsd = formatUsd(usdValue);
  const formattedNpr = formatNpr(actualPrice);

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
