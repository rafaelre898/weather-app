export interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherDetailsProps {
  sunrise: string;
  sunset: string;
  chanceOfRain: number;
  wind: string;
  uvIndex: number;
  feelsLike: string;
  visibility: string;
}
