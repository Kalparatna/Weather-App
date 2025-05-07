import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700 text-white font-sans">
      <Header />
      <Navbar />
      <main className="flex-grow p-4">
        <SearchBar setWeatherData={setWeatherData} />
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </main>
      <Footer />
    </div>
  );
}
