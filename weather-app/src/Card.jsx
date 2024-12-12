import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

export function Card({ value, img, condition }) {
  const nightColor =
    "bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white drop-shadow-2xl shadow-[#111827]";
  const colors = value === "night" ? nightColor : "bg-[#F9FAFB] text-black";
  const nightPic = "/assets/Night.png";
  const pic = img === "night" ? nightPic : "/assets/Sun.png";
  const conditionColor = "text-blue-500";
  const nightConditionColor =
    condition === "clear" ? conditionColor : "text-amber-600";
  return (
    <div
      className={`w-[380px] h-[700px] ${colors} border-4 rounded-3xl relative`}
    >
      <div className="absolute top-[70px] left-[50px]">
        <p className="font-thin">September 10, 2021</p>
        <p className="text-5xl font-extrabold">Kraków</p>
        <CiLocationOn className="absolute top-[10px] left-[250px] text-2xl" />
      </div>
      <div className="absolute top-[400px] left-[50px]">
        <p className="text-[100px] font-bold leading-none bg-gradient-to-b from-[#6B7280] to-[#111827] inline-block text-transparent bg-clip-text">
          17°
        </p>
        <p className={`text-[20px] mt-2 ml-2 font-bold ${nightConditionColor}`}>
          Bright
        </p>
      </div>
      <div className="absolute top-[179px] left-[70px] drop-shadow-[0_20px_120px_rgba(205,204,0)]">
        <Image src={`${pic}`} alt="sun" width={220} height={220} />
      </div>
    </div>
  );
}
