import { fetchWeatherData } from "../utils/fetchWeatherData";
import { Weather, GetWeatherArgs } from "../types";

export const weatherResolver = {
  Query: {
    getWeather: async (
      _parent: unknown,
      { city }: GetWeatherArgs
    ): Promise<Weather> => {
      return await fetchWeatherData(city);
    },
  },
};
