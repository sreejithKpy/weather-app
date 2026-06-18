import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;
  return (
    <div className="weather-card-main">
      <h2>{weather.name}</h2>

      <img className="weather-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />

      <div className="weather-temp">
        {Math.round(weather.main.temp)}°C
      </div>

      <div className="weather-desc">
        {weather.weather[0].description}
      </div>

      <div className="weather-details-grid">
        <div className="weather-detail-item">
          <span>Humidity</span>
          <strong>💧 {weather.main.humidity}%</strong>
        </div>

        <div className="weather-detail-item">
          <span>Wind Speed</span>
          <strong>💨 {weather.wind.speed} m/s</strong>

        </div>

        <div className="weather-detail-item">
          <span>Condition</span>
          <strong>☁️ {weather.weather[0].main}</strong>

        </div>

        <div className="weather-detail-item">
          <span>Feels Like</span>
          <strong>🌡️ {Math.round(weather.main.feels_like)}°C</strong>

        </div>


      </div>

      
      
      
    </div>
  );
};

export default WeatherCard;
