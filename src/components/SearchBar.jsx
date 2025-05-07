import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setWeatherData }) => {
  const [query, setQuery] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastCity, setLastCity] = useState('');

  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      setIsError(false);
      const res = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`,
        {
          headers: {
            'x-rapidapi-key': '57d454b573msh1e83c51919ba653p103be2jsn84d925033cd5',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          },
        }
      );
      setWeatherData(res.data);
      setLastCity(city);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeatherData(query.trim());
    }
  };

  const handleRefresh = () => {
    if (lastCity) fetchWeatherData(lastCity);
  };

  return (
    <div className="w-full flex justify-center mt-8 px-4">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="w-full flex-1 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter city name..."
          />
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition w-full sm:w-auto"
            >
              🔍 Search
            </button>
            {lastCity && (
              <button
                type="button"
                onClick={handleRefresh}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg transition w-full sm:w-auto"
              >
                🔄 Refresh
              </button>
            )}
          </div>
        </form>
        {loading && (
          <p className="text-yellow-200 text-sm mt-3 animate-pulse">Loading weather data...</p>
        )}
        {isError && (
          <p className="text-red-400 text-sm mt-3">
            ❌ Error fetching weather data. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
