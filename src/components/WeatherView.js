import React from "react";
import './WeatherView.css';


const WeatherView = ({ data }) => {
  const { name, main, weather } = data;

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>Weather in {name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="temperature">{main.temp}°C</p>
      <p className="weather-description">{weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherView;