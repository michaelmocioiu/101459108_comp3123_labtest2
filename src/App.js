import './App.css';
import React, { useState } from "react";
import axios from "axios";
import WeatherView from './components/WeatherView';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Toronto");
  const [error, setError] = useState("");
  const fetchWeatherData = async () => {
    const KEY = `def89e4d9c088af766dc9ec8282215e1`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;
    
    try {
      const res = await axios.get(URL);
      setWeatherData(res.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };
  
  return (
    <div className="app">
    <h1>Weather App</h1>
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city name"
      className="input"
    />
    <button onClick={fetchWeatherData} className="button">
      Get Weather
    </button>

    {error && <p className="error">{error}</p>}

    {weatherData && <WeatherView data={weatherData} />}
  </div>
  );
}

export default App;
