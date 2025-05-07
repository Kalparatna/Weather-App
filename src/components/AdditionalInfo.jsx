// AdditionalInfo.js
import React from 'react';

const AdditionalInfo = ({ current }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white/20 text-white p-5 rounded-xl shadow-lg flex flex-col items-center">
        <h3 className="font-bold text-xl mb-2">Humidity</h3>
        <p className="text-sm">{current.humidity}%</p>
      </div>
      <div className="bg-white/20 text-white p-5 rounded-xl shadow-lg flex flex-col items-center">
        <h3 className="font-bold text-xl mb-2">Wind Speed</h3>
        <p className="text-sm">{current.wind_kph} km/h</p>
      </div>
      <div className="bg-white/20 text-white p-5 rounded-xl shadow-lg flex flex-col items-center">
        <h3 className="font-bold text-xl mb-2">Pressure</h3>
        <p className="text-sm">{current.pressure_mb} mb</p>
      </div>
      <div className="bg-white/20 text-white p-5 rounded-xl shadow-lg flex flex-col items-center">
        <h3 className="font-bold text-xl mb-2">Feels Like</h3>
        <p className="text-sm">{current.feelslike_c}°C</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
