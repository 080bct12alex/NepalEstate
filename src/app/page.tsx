"use client";

import { useState } from 'react';
import Header from '../components/Header';
import PredictionForm from '../components/PredictionForm';
import ResultDisplay from '../components/ResultDisplay';
import FeaturedProperties from '../components/FeaturedProperties';

// Define the type for  form data
interface PredictionFormData {
  floors: number;
  area: number;
  road_width: number;
  city_bhaktapur: number;
  city_kathmandu: number;
  city_lalitpur: number;
  road_type_blacktopped: number;
  road_type_gravelled: number;
  road_type_soil_stabilized: number;
}

export default function Home() {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePrediction = async (formData: PredictionFormData) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Sending prediction request with data:', formData);
      
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Prediction request failed: ${response.status} - ${errorText}`);
      }
      
      const result = await response.json();
      setPrediction(result.predictedPrice);
    } catch (error: unknown) {
      console.error('Prediction failed:', error);
      if (error instanceof Error) {
        setError(`Failed to get prediction: ${error.message}`);
      } else {
        setError('Failed to get prediction: Unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
            Find Your Dream Home&apos;s Value
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <PredictionForm onSubmit={handlePrediction} loading={loading} />
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            {prediction && <ResultDisplay prediction={prediction} />}
          </div>
        </section>
        <FeaturedProperties />

        <section className="py-12 bg-gray-100 rounded-lg mt-12 p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">Enter Property Details</h3>
            <p className="text-gray-600">Provide information about the property including location, size, and features.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">Get Instant Prediction</h3>
            <p className="text-gray-600">Our AI model analyzes the data and provides an accurate price estimate.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">Make Informed Decisions</h3>
            <p className="text-gray-600">Use the prediction to negotiate better deals or set the right price for your property.</p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
