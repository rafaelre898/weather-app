## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
- **Node.js**: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **Git**: You'll need Git to clone the repository. Install it from [here](https://git-scm.com/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rafaelre898/weather-app.git
   cd weather-app
   
2. **Install FrontEnd dependencies**:
   ```bash
   cd frontend
   npm install

3. **Install BackEnd dependencies**:
   ```bash
   cd ../backend
   npm install


4. **Add env for Weather API key and OpenWeatherMap URL**:
   ```bash
   REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/
   WEATHER_API_KEY=your_openweathermap_api_key

   [You need to singUp for OpenWeatherMap to obtain the key]


5. **Start Backend**:
   ```bash
    cd backend
    npm start
    Will run on: http://localhost:4000

6. **Start FrontEnd**:
   ```bash
   cd frontend
   npm start
   Will run on: http://localhost:3000