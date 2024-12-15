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
    date: "",
  });

  const onChangeText = (event) => setSearch(event.target.value);
  const pressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDayWeather({
          dayTemperature: data.forecast?.forecastday[0].day.maxtemp_c,
          nightTemperature: data.forecast?.forecastday[0].day.mintemp_c,
          condition: data.forecast?.forecastday[0].day.condition.text,
          date: data.forecast?.forecastday[0].date,
        });
        console.log(dayWeather.condition);
      });
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
        <div className="size-[60px] rounded-[30px] bg-[#F3F4F6] absolute top-[330px] left-[-31px] z-0"></div>
        <div className="size-[60px] rounded-[30px] bg-[#F3F4F6] absolute top-[470px] left-[-31px] z-0"></div>
        <div className="size-[100px] rounded-[30px] bg-[#0F141E] absolute top-[256px] z-20"></div>
        <div className="size-[100px] rounded-[30px] bg-[#0F141E] absolute top-[494px] z-20"></div>
        <div className="size-[150px] border-2 rounded-full border-slate-700 absolute top-[350px] left-[-76px]"></div>
        <div className="size-[450px] border-2 rounded-full border-slate-700 absolute top-[200px] left-[-220px]"></div>
        <div className="size-[900px] border-2 rounded-full border-slate-700 absolute left-[-450px]"></div>
        <div className="max-w-md mx-auto absolute top-[216px] left-[193px]">
          <Card
            value="night"
            state="clear"
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
