import { useState } from "react";

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    } else alert("please enter city name! ");
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className=" flex-1 p-2 border border-gray-300 rounded-l-lg bg-transparent  outline-none border-r-0"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 border cursor-pointer p-2 hover:bg-blue-600 border-l-0 rounded-r-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
