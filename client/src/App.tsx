import React from "react";
import Weather from "./components/Weather";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="rounded-lg p-8 w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Weather Dashboard
        </h1>
        <Weather />
      </div>
    </div>
  );
};

export default App;
