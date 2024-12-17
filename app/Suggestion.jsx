"use client";
import { useEffect, useState } from "react";

export function Suggestion({ search }) {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [suggestion, setSuggestion] = useState([]);

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
        return city.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredCities(filtered.slice(0, 5));
    } else {
      setFilteredCities([]);
    }
  }, [search]);

  return (
    <div>
      {filteredCities.length > 0 ? (
        filteredCities.map((city, index) => (
          <div key={index} className="w-full p-4 rounded-3xl bg-white">
            <button>{city}</button>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}
