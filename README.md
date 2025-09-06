# React Weather App 🌤️

[![Version](https://img.shields.io/npm/v/react-weather-app.svg)](https://www.npmjs.com/package/react-weather-app)
[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)]
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-blue?logo=tailwind-css&logoColor=white)]
[![OpenWeatherMap API](https://img.shields.io/badge/OpenWeatherMap-API-orange)]

A simple **Weather Application** built with **React** that allows users to search for current weather information of any city using the **OpenWeatherMap API**. The app features a sleek user interface with a video background, a search bar, and dynamic weather cards displaying real-time data.

---

## Features ✅

- Search for any city worldwide.
- Display current temperature, weather description, humidity, wind speed, pressure, and "feels like" temperature.
- Responsive design with a clean UI.
- Video background with overlay for better readability.
- Handles errors gracefully (city not found or network issues).
- Loading indicator while fetching data.

---

## Technologies Used 🛠️

- **React** (functional components + hooks)
- **Axios** (for fetching data from OpenWeatherMap API)
- **Tailwind CSS** (for styling and responsive layout)
- **OpenWeatherMap API** (for weather data)

---

## Installation 💻

```bash
npm install
```

Create a `.env` file in the root folder and add your OpenWeatherMap API key:

```env
REACT_APP_API_KEY=your_api_key_here
```

---

## Usage 📝

```bash
npm start
```

1. Enter a city name in the search bar.
2. Click "Search" or press Enter.
3. The app will display the current weather information.
4. If the city is not found, an error message will appear.

---

## Folder Structure 📁

```
/src
  /components
    SearchBar.jsx
    WeatherCard.jsx
  /assets
    video.mp4
  App.js
```

---

## Author 👤

**hamza alkhader**

- Github: [@hamza-kh2003](https://github.com/hamza-kh2003)
- Linkedin: [Hamza Alkhader](https://www.linkedin.com/in/hamza-alkhader-39424527b/)

---

## Show your support ⭐

Give a ⭐️ if this project helped you!

---
