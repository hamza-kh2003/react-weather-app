const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-6 py-2">
      <h2 className="text-center text-2xl font-semibold">
        {weather.name},{weather.sys.country}
      </h2>
      <div className="flex justify-center items-center mt-4">
        <img
          className="w-16 h-16"
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p className="text-4xl font-bold ">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="text-center text-gray-400 capitalize">
        {weather.weather[0].description}
      </p>
      <div className="grid grid-cols-2 text-center gap-4 mt-6 ">
        <div>
          <p className="text-gray-400">Humidity :</p>
          <p className="font-bold">{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="text-gray-400">Wind :</p>
          <p className="font-bold">{weather.wind.speed} m/s</p>
        </div>
        <div>
          <p className="text-gray-400">Pressure :</p>
          <p className="font-bold">{weather.main.pressure} hPa</p>
        </div>
        <div>
          <p className="text-gray-400">Feels like :</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
