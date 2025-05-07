// CurrentWeather.js
import React from 'react';

const CurrentWeather = ({ location, current }) => {
  return (
    <div className="w-full text-center mb-6">
      <h2 className="text-3xl font-extrabold text-white">
        {location.name}, {location.country}
      </h2>
      <p className="text-lg text-gray-200 mt-1 mb-6">
        Now: {current.temp_c}°C — {current.condition.text}
      </p>
    </div>
  );
};

export default CurrentWeather;
