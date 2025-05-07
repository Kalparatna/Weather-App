// Forecast.js
import React from 'react';

// Helper function to get the label for the day
const getDayLabel = (date) => {
  const today = new Date();
  const forecastDate = new Date(date);

  const diff = forecastDate - today;
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

  if (diff === 0) {
    return "Today";
  } else if (diff === oneDay) {
    return "Tomorrow";
  } else if (diff === -oneDay) {
    return "Yesterday";
  } else {
    return null; // Return null for actual date (handled separately)
  }
};

const Forecast = ({ forecastday }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
      {forecastday.map((day) => {
        const dayLabel = getDayLabel(day.date); // Get the label for today, tomorrow, or yesterday
        const formattedDate = new Date(day.date).toLocaleDateString(); // Format the date as "MM/DD/YYYY"

        return (
          <div
            key={day.date}
            className="backdrop-blur-md bg-white/20 text-white p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 w-full max-w-xs"
          >
            <h3 className="font-bold text-xl mb-2">
              {dayLabel ? `${dayLabel}: ${formattedDate}` : formattedDate}
            </h3>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="w-16 h-16 mx-auto"
            />
            <p className="capitalize text-sm mt-1">{day.day.condition.text}</p>
            <div className="mt-2 text-sm">
              <p>🌡 Max: {day.day.maxtemp_c}°C</p>
              <p>❄ Min: {day.day.mintemp_c}°C</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
