"use client";
import { useEffect, useState } from "react";

export function Suggestion({ search, setSearch, onCitySelect }) {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const handleClick = (city) => {
    setSearch(city);
    onCitySelect(city);
  };

  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((response) => response.json())
      .then((data) => {
        const allCities = [];
        data?.data.forEach((country) => {
          country.cities.forEach((city) => {
            allCities.push(city);
          });
        });
        setCities(allCities);
      });
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCities(filtered.slice(0, 3));
    } else {
      setFilteredCities([]);
    }
  }, [search, cities]);

  return (
    <div className="suggestions-container w-full mt-2">
      {filteredCities.length > 0 ? (
        filteredCities.map((city, index) => (
          <div
            key={index}
            className="w-full p-4 bg-white border-b hover:bg-gray-100 cursor-pointer text-black"
            onClick={() => handleClick(city)}
          >
            {city}
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-sm">No suggestions found</p>
      )}
    </div>
  );
}
