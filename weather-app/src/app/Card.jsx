import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";

export function Card({
  value,
  img,
  state,
  cityName,
  temperature,
  condition,
  date,
}) {
  const nightColors =
    "bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white drop-shadow-2xl shadow-[#111827] opacity-90";
  const colors =
    value === "night" ? nightColors : "bg-[#F9FAFB] text-black opacity-90";
  const [dayPic, setDayPic] = useState(null);
  const [nightPic, setNightPic] = useState(null);

  const weatherStatus = value === "day" ? dayPic : nightPic;
  useEffect(() => {
    if (value === "day") {
      if (condition?.toLowerCase().includes("sun")) {
        setDayPic("/assets/Sun.png");
      } else if (condition?.toLowerCase().includes("wind")) {
        setDayPic("/assets/Wind.png");
      } else if (condition?.toLowerCase().includes("snow")) {
        setDayPic("/assets/Snow.png");
      } else if (condition?.toLowerCase().includes("rain")) {
        setDayPic("/assets/Rain.png");
      } else if (condition?.toLowerCase().includes("cloud")) {
        setDayPic("/assets/Clouds.png");
      } else if (condition?.toLowerCase().includes("cast")) {
        setDayPic("/assets/Clouds.png");
      }
    } else {
      if (condition?.toLowerCase().includes("sun")) {
        setNightPic("/assets/Night.png");
      } else if (condition?.toLowerCase().includes("wind")) {
        setNightPic("/assets/NWind.png");
      } else if (condition?.toLowerCase().includes("snow")) {
        setNightPic("/assets/NSnow.png");
      } else if (condition?.toLowerCase().includes("rain")) {
        setNightPic("/assets/NRain.png");
      } else if (condition?.toLowerCase().includes("cloud")) {
        setNightPic("/assets/NClouds.png");
      } else if (condition?.toLowerCase().includes("cast")) {
        setNightPic("/assets/NClouds.png");
      }
    }
  }, [condition, value, cityName]);

  console.log(condition);

  const conditionColor = "text-blue-500";
  const nightConditionColor =
    state === "clear" ? conditionColor : "text-amber-600";
  return (
    <div className={`w-[380px] h-[650px] ${colors} rounded-3xl`}>
      <div className="box-border pl-10 pt-10">
        <div className="flex gap-[130px]">
          <p className="font-xl">{date}</p>
          <CiLocationOn className="text-2xl" />
        </div>
        <p className="text-5xl font-extrabold h-10">{cityName}</p>
      </div>
      <div className="drop-shadow-[0_20px_120px_rgba(205,204,0)] box-border mt-3 pl-20">
        <img src={weatherStatus} alt="sun" width={220} height={220} />
      </div>
      <div className="box-border pl-10 pt-10">
        <p className="text-[80px] font-bold leading-none bg-gradient-to-b from-[#6B7280] to-[#111827] inline-block text-transparent bg-clip-text">
          {temperature}
        </p>
        <p className={`text-[20px] mt-2 ml-2 font-bold ${nightConditionColor}`}>
          {condition}
        </p>
      </div>
      <div className="flex gap-[60px] mt-[100px] justify-center text-xl">
        <FaHome />
        <FaLocationDot />
        <FaRegHeart />
        <CgProfile />
      </div>
    </div>
  );
}
