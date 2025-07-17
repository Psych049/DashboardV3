import React from 'react';
import { currentWeather, weatherForecast } from '../data/mockData';

const WeatherPanel = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Weather Updates</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Current Weather */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div className="text-5xl mr-4">
              {currentWeather.condition === 'Sunny' ? '☀️' : 
               currentWeather.condition === 'Cloudy' ? '☁️' : 
               currentWeather.condition === 'Rainy' ? '🌧️' : '⛅️'}
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800">{currentWeather.temperature}°C</div>
              <div className="text-gray-500">{currentWeather.condition}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <div className="text-gray-500">Feels Like</div>
            <div className="font-medium text-gray-700">{currentWeather.feelsLike}°C</div>
            
            <div className="text-gray-500">Wind</div>
            <div className="font-medium text-gray-700">{currentWeather.wind}</div>
            
            <div className="text-gray-500">UV Index</div>
            <div className="font-medium text-gray-700">{currentWeather.uvIndex}</div>
            
            <div className="text-gray-500">Humidity</div>
            <div className="font-medium text-gray-700">{currentWeather.humidity}</div>
            
            <div className="text-gray-500">Precipitation</div>
            <div className="font-medium text-gray-700">{currentWeather.precipitation}</div>
          </div>
        </div>
        
        {/* 5-Day Forecast */}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-500 mb-3">5-Day Forecast</h3>
          <div className="flex justify-between">
            {weatherForecast.map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-xs font-medium mb-1">{day.day}</div>
                <div className="text-2xl mb-1">{day.icon}</div>
                <div className="text-xs font-medium text-gray-700">{day.high}°</div>
                <div className="text-xs text-gray-500">{day.low}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPanel;