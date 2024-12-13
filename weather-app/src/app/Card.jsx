import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export function Card({ value, img, state, cityName, temperature, condition }) {
  const nightColors =
    "bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white drop-shadow-2xl shadow-[#111827]";
  const colors = value === "night" ? nightColors : "bg-[#F9FAFB] text-black";
  const nightPic = "/assets/Night.png";
  const pic = img === "dark" ? nightPic : "/assets/Sun.png";
  const conditionColor = "text-blue-500";
  const nightConditionColor =
    state === "clear" ? conditionColor : "text-amber-600";
  return (
    <div className={`w-[380px] h-[650px] ${colors} rounded-3xl`}>
      <div className="box-border pl-10 pt-10">
        <div className="flex gap-[130px]">
          <p className="font-thin">September 10, 2021</p>
          <CiLocationOn className="text-2xl" />
        </div>
        <p className="text-5xl font-extrabold h-10">{cityName}</p>
      </div>
      <div className="drop-shadow-[0_20px_120px_rgba(205,204,0)] box-border mt-3 pl-20">
        <Image src={`${pic}`} alt="sun" width={220} height={220} />
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
