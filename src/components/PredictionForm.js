"use client";

import { useState } from 'react';

export default function PredictionForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    floors: 1,
    area: 10,
    road_width: 10,
    city_bhaktapur: 0,
    city_kathmandu: 1,
    city_lalitpur: 0,
    road_type_blacktopped: 1,
    road_type_gravelled: 0,
    road_type_soil_stabilized: 0
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // For city selection, ensure only one city is selected
      if (name.startsWith('city_')) {
        const updatedFormData = {
          ...formData,
          city_bhaktapur: 0,
          city_kathmandu: 0,
          city_lalitpur: 0
        };
        updatedFormData[name] = checked ? 1 : 0;
        setFormData(updatedFormData);
      } 
      // For road type selection, ensure only one road type is selected
      else if (name.startsWith('road_type_')) {
        const updatedFormData = {
          ...formData,
          road_type_blacktopped: 0,
          road_type_gravelled: 0,
          road_type_soil_stabilized: 0
        };
        updatedFormData[name] = checked ? 1 : 0;
        setFormData(updatedFormData);
      } else {
        setFormData({
          ...formData,
          [name]: checked ? 1 : 0
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'number' ? parseFloat(value) : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Numeric Inputs */}
        <div>
          <label className="block text-gray-700 mb-2">Number of Floors</label>
          <input
            type="number"
            name="floors"
            value={String(formData.floors || 0)}
            onChange={handleChange}
            min="1"
            step="any" // ✅ allow decimals like 3.5
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Area (Anas)</label>
          <input
            type="number"
            name="area"
            value={String(formData.area || 0)}
            onChange={handleChange}
            min="1"
            step="any" // ✅ allow decimals
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Road Width (ft)</label>
          <input
            type="number"
            name="road_width"
            value={String(formData.road_width || 0)}
            onChange={handleChange}
            min="1"
            step="any" // ✅ allow decimals
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      {/* City Selection */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">City</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="city_kathmandu"
              checked={formData.city_kathmandu === 1}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="ml-2 text-gray-700">Kathmandu</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="city_bhaktapur"
              checked={formData.city_bhaktapur === 1}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="ml-2 text-gray-700">Bhaktapur</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="city_lalitpur"
              checked={formData.city_lalitpur === 1}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="ml-2 text-gray-700">Lalitpur</label>
          </div>
        </div>
      </div>

      {/* Road Type Selection */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Road Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="road_type_blacktopped"
              checked={formData.road_type_blacktopped === 1}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="ml-2 text-gray-700">Blacktopped</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="road_type_gravelled"
              checked={formData.road_type_gravelled === 1}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="ml-2 text-gray-700">Gravelled</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="road_type_soil_stabilized"
              checked={formData.road_type_soil_stabilized === 1}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="ml-2 text-gray-700">Soil Stabilized</label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {loading ? 'Calculating...' : 'Predict Price'}
      </button>
    </form>
  );
}
