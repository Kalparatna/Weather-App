// WeatherCard.js
import React from 'react';
import CurrentWeather from './CurrentWeather';
import AdditionalInfo from './AdditionalInfo';
import Forecast from './Forecast';

const WeatherCard = ({ weatherData }) => {
  const { location, current, forecast } = weatherData;

  return (
    <div className="w-full flex justify-center px-4 mt-8">
      <div className="max-w-6xl w-full text-center">
        {/* Displaying the current weather */}
        <CurrentWeather location={location} current={current} />

        {/* Displaying additional weather info */}
        <AdditionalInfo current={current} />

        {/* Displaying the 5-day forecast */}
        <Forecast forecastday={forecast.forecastday} />
      </div>
    </div>
  );
};

export default WeatherCard;
