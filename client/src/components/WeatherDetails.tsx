import React from "react";
import { WeatherDetailsProps } from "../interfaces";

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  sunrise,
  sunset,
  chanceOfRain,
  wind,
  uvIndex,
  feelsLike,
  visibility,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Detailed Weather Information
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row lg:flex-wrap  lg:justify-around md:items-start text-gray-600 lg:gap-x-3">
        {[
          { label: "Sunrise", value: sunrise },
          { label: "Sunset", value: sunset },
          { label: "Chance of Rain", value: `${chanceOfRain}%` },
          { label: "Wind", value: wind },
          { label: "UV Index", value: uvIndex },
          { label: "Feels Like", value: feelsLike },
          { label: "Visibility", value: visibility },
        ].map((detail, index) => (
          <div
            key={index}
            className="w-full flex-1 flex flex-col items-center md:items-start justify-center lg:w-1/6 mb-4"
          >
            <span className="font-medium text-sm">{detail.label}</span>
            <span className="text-md">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
