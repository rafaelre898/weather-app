import axios from 'axios';
import dotenv from 'dotenv';
import { Weather } from '../types'; 

dotenv.config();

export const fetchWeatherData = async (city: string): Promise<Weather> => {
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: process.env.WEATHER_API_KEY,
      units: 'metric',
    },
  });
  const data = response.data;
  return {
    temperature: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    pressure: data.main.pressure,
    visibility: data.visibility,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
};
