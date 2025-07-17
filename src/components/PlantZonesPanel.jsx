import React from 'react';
import { plantZones } from '../data/mockData';

const PlantZonesPanel = () => {
  const getMoistureColor = (level) => {
    if (level < 30) return 'text-red-500';
    if (level < 40) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getMoistureLabel = (level) => {
    if (level < 30) return 'Low';
    if (level < 40) return 'Medium';
    return 'Good';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Plant Zones</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zone</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soil Type</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Moisture Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {plantZones.map((zone, index) => (
              <tr key={index}>
                <td className="px-3 py-3 text-sm font-medium text-gray-800">{zone.name}</td>
                <td className="px-3 py-3 text-sm text-gray-600">{zone.soilType}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded mr-2">
                      <div 
                        className={`h-full rounded ${zone.moistureLevel < 30 ? 'bg-red-500' : zone.moistureLevel < 40 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${zone.moistureLevel}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${getMoistureColor(zone.moistureLevel)}`}>
                      {zone.moistureLevel}% ({getMoistureLabel(zone.moistureLevel)})
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlantZonesPanel;