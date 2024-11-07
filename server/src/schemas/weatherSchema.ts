import { gql } from "apollo-server-express";

export const weatherSchema = gql`
  type Weather {
    temperature: Float
    description: String
    icon: String
    humidity: Int
    windSpeed: Float
    pressure: Int
    visibility: Int
    sunrise: Int
    sunset: Int
  }

  type Query {
    getWeather(city: String!): Weather
  }
`;
