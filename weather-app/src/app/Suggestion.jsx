"use client";
import { useEffect, useState } from "react";

export function Suggestion({ search }) {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((response) => response.json())
      .then((data) => {
        const allCities = [];
        data?.data.map((country) => {
          country.cities.map((city) => {
            allCities.push(city);
          });
        });
        setCities(allCities);
      });
  }, [search]);
  useEffect(() => {
    console.log("cities", cities);
    if (search) {
      const filtered = cities.filter((city) => {
        city.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredCities(filtered.slice(0, 5));
    } else {
      setFilteredCities([]);
    }
  }, [search]);

  return (
    <div>
      {filteredCities.map((city) => (
        <div className="block w-full p-4 rounded-3xl">
          <button>{city}</button>
        </div>
      ))}
    </div>
  );
}
