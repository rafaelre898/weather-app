import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER } from "../queries/getWeather";
import WeatherDetails from "./WeatherDetails";
import { WeatherData } from "../interfaces";

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [getWeather, { loading, data, error }] = useLazyQuery<{
    getWeather: WeatherData;
  }>(GET_WEATHER);

  const handleSearch = () => {
    if (city) getWeather({ variables: { city } });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border border-gray-300 rounded-md p-2 w-full max-w-sm mb-4 text-center focus:border-yellow-500 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-500 text-white rounded-md py-2 px-6 w-full max-w-sm transition duration-150 hover:bg-yellow-600 cursor-pointer"
      >
        Get Weather
      </button>

      {loading && <p className="text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {data && data.getWeather && (
        <div className="rounded-lg p-6 mt-6 w-full">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
            Weather in {city}
          </h3>
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl font-semibold">
              {data.getWeather.temperature}°C
            </span>
            <img
              src={`http://openweathermap.org/img/wn/${data.getWeather.icon}.png`}
              alt="Weather icon"
              className="ml-3 w-12 h-12"
            />
          </div>
          <p className="text-center text-gray-600 mb-4">
            {data.getWeather.description}
          </p>
          <div className="w-full">
            <WeatherDetails
                sunrise={new Date(
                data.getWeather.sunrise * 1000
                ).toLocaleTimeString()}
                sunset={new Date(
                data.getWeather.sunset * 1000
                ).toLocaleTimeString()}
                chanceOfRain={data.getWeather.humidity}
                wind={`${data.getWeather.windSpeed} km/h`}
                uvIndex={2}
                feelsLike={`${data.getWeather.temperature}°C`}
                visibility={`${(data.getWeather.visibility / 1000).toFixed(1)} km`}
            />
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Weather;
