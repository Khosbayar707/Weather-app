"use client";

import { Montserrat } from "next/font/google";
import { Card } from "./Card.jsx";
import { Round } from "./Round.jsx";
import { SearchInput } from "./SearchInput.jsx";
import { useEffect, useState } from "react";
import { Suggestion } from "./Suggestion.jsx";

const API_KEY = "a15fbbec54634ecc98772509241312";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({
    dayTemperature: 0,
    nightTemperature: 0,
    condition: "",
    date: "",
  });

  const onChangeText = (event) => setSearch(event.target.value);

  const pressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };

  const handleCitySelect = (selectedCity) => {
    setSearch(selectedCity);
    setCity(selectedCity);
  };

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          dayTemperature: data.forecast?.forecastday[0].day.maxtemp_c,
          nightTemperature: data.forecast?.forecastday[0].day.mintemp_c,
          condition: data.forecast?.forecastday[0].day.condition.text,
          date: data.forecast?.forecastday[0].date,
        });
      });
  }, [city]);

  return (
    <div className={`w-full h-screen flex ${montserrat.className}`}>
      <div className="w-[50%] h-screen bg-[#F3F4F6] relative">
        <div className="max-w-md mx-auto absolute right-[80px] z-20 xl:right-[200px]">
          <SearchInput
            search={search}
            onChangeText={onChangeText}
            pressEnter={pressEnter}
          />
          <Suggestion
            search={search}
            setSearch={setSearch}
            onCitySelect={handleCitySelect}
          />
        </div>
        <div className="max-w-md mx-auto absolute top-[216px] right-[193px] z-20 max-2xl:right-[100px]">
          <Card
            value="day"
            cityName={city}
            temperature={dayWeather.dayTemperature}
            condition={dayWeather.condition}
            date={dayWeather.date}
          />
        </div>
      </div>
      <div className="w-[50%] h-screen bg-[#0F141E] relative">
        <div className="size-[150px] rounded-full bg-[#F3F4F6] absolute top-[350px] left-[-76px] z-10 flex justify-center items-center">
          <img src="/assets/logo.png" alt="logo" className="size-[90px]" />
        </div>
        <Round />
        <div className="max-w-md mx-auto absolute top-[216px] left-[193px] max-2xl:left-[100px]">
          <Card
            value="night"
            cityName={city}
            temperature={dayWeather.nightTemperature}
            condition={dayWeather.condition}
            date={dayWeather.date}
          />
        </div>
      </div>
    </div>
  );
}
