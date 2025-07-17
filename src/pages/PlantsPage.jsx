import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const PlantsPage = () => {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadZones() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('zones')
          .select('*')
          .order('name', { ascending: true });

        if (error) throw error;
        setZones(data || []);
      } catch (err) {
        console.error('Error loading zones:', err);
        setError('Failed to load plant zones. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    loadZones();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">My Plants</h1>

      {error && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center p-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : zones.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="text-5xl mb-4">🪴</div>
          <h2 className="text-xl font-medium text-gray-700 mb-2">No Plant Zones Yet</h2>
          <p className="text-gray-500 mb-4">
            Add your first plant zone to start monitoring your garden
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add Plant Zone
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <div key={zone.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800">{zone.name}</h3>
                <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  {zone.soil_type}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-1">Moisture Level</div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${
                      zone.moisture_level < 30
                        ? 'bg-red-500'
                        : zone.moisture_level < 40
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${zone.moisture_level}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {zone.moisture_level}%
                </div>
              </div>

              <div className="flex justify-end">
                <button className="text-sm text-green-600 hover:text-green-800">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantsPage;