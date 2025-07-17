import React, { useState } from 'react';
import { soilRecommendations } from '../data/mockData';

const PlantRecommendationsPanel = () => {
  const [selectedSoil, setSelectedSoil] = useState('Loam soil');
  const soilTypes = Object.keys(soilRecommendations);

  const currentRecommendation = soilRecommendations[selectedSoil];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Plant Recommendations</h2>
      
      <div className="mb-4">
        <label htmlFor="soil-select" className="block text-sm font-medium text-gray-700 mb-1">
          Choose soil type:
        </label>
        <select
          id="soil-select"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          value={selectedSoil}
          onChange={(e) => setSelectedSoil(e.target.value)}
        >
          {soilTypes.map((soil) => (
            <option key={soil} value={soil}>
              {soil}
            </option>
          ))}
        </select>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="flex items-center text-sm font-medium text-gray-700">
            <span className="mr-2">📘</span>
            Soil Characteristics
          </h3>
          <p className="mt-1 text-sm text-gray-600 ml-6">
            {currentRecommendation.characteristics}
          </p>
        </div>
        
        <div>
          <h3 className="flex items-center text-sm font-medium text-gray-700">
            <span className="mr-2">🌼</span>
            Ideal Plants
          </h3>
          <div className="mt-1 ml-6">
            <div className="flex flex-wrap gap-2">
              {currentRecommendation.idealPlants.map((plant, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >
                  {plant}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="flex items-center text-sm font-medium text-gray-700">
            <span className="mr-2">💧</span>
            Watering Tips
          </h3>
          <p className="mt-1 text-sm text-gray-600 ml-6">
            {currentRecommendation.wateringTips}
          </p>
        </div>
        
        <div>
          <h3 className="flex items-center text-sm font-medium text-gray-700">
            <span className="mr-2">🪴</span>
            Amendments
          </h3>
          <p className="mt-1 text-sm text-gray-600 ml-6">
            {currentRecommendation.amendments}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantRecommendationsPanel;