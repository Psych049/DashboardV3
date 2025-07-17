import React from 'react';
import StatsCard from './StatsCard';
import WeatherPanel from './WeatherPanel';
import AlertsPanel from './AlertsPanel';
import TemperatureChart from './charts/TemperatureChart';
import MoistureHumidityChart from './charts/MoistureHumidityChart';
import PlantZonesPanel from './PlantZonesPanel';
import PlantRecommendationsPanel from './PlantRecommendationsPanel';
import { mockStats } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Garden Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockStats.map((stat, index) => (
          <StatsCard 
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </div>
      
      {/* Weather Panel */}
      <WeatherPanel />
      
      {/* Alerts Section */}
      <AlertsPanel />
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Temperature Trends (24h)</h2>
          <TemperatureChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Moisture & Humidity Trends (24h)</h2>
          <MoistureHumidityChart />
        </div>
      </div>
      
      {/* Plant Zones & Recommendations Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlantZonesPanel />
        <PlantRecommendationsPanel />
      </div>
    </div>
  );
};

export default Dashboard;