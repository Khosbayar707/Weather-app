"use client";

import { Card } from "./Card.jsx";
import { SearchInput } from "./SearchInput.jsx";
import { useEffect, useState } from "react";

const API_KEY = "a15fbbec54634ecc98772509241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [dayWeather, setDayWeather] = useState({
    dayTemperature: 0,
    nightTemperature: 0,
    condition: "",
  });

  const onChangeText = (event) => setSearch(event.target.value);
  const pressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a15fbbec54634ecc98772509241312&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) =>
        setDayWeather({
          dayTemperature: data.forecast.forecastday[0].day.maxtemp_c,
          nightTemperature: data.forecast.forecastday[0].day.mintemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
        })
      );
  }, [city]);

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-screen bg-[#F3F4F6] relative">
        <div className="max-w-md mx-auto">
          <SearchInput
            search={search}
            onChangeText={onChangeText}
            pressEnter={pressEnter}
          />
        </div>
        <div className="max-w-md mx-auto absolute top-[216px] right-[193px]">
          <Card
            cityName={city}
            temperature={dayWeather.dayTemperature}
            condition={dayWeather.condition}
          />
        </div>
      </div>
      <div className="w-[50%] h-screen bg-[#0F141E] relative">
        <div className="max-w-md mx-auto absolute top-[216px] left-[193px]">
          <Card
            value="night"
            img="dark"
            state="clear"
            cityName={city}
            temperature={dayWeather.nightTemperature}
            condition={dayWeather.condition}
          />
        </div>
      </div>
    </div>
  );
}
