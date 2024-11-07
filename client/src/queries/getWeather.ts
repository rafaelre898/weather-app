import { gql } from '@apollo/client';

export const GET_WEATHER = gql`
  query getWeather($city: String!) {
    getWeather(city: $city) {
      temperature
      description
      icon
      humidity
      windSpeed
      pressure
      visibility
      sunrise
      sunset
    }
  }
`;
