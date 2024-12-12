"use client";

import { Card } from "../Card.jsx";
import { Round } from "../Round.jsx";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-screen bg-[#F3F4F6] relative">
        <div className="max-w-md mx-auto">
          <input
            type="search"
            className="block w-full p-4 rounded-3xl mt-6"
            placeholder="Search..."
            required
          />
        </div>
        <div className="max-w-md mx-auto absolute top-[216px] right-[193px]">
          <Card />
        </div>
      </div>

      <div className="w-[50%] h-screen bg-[#0F141E] relative">
        <div className="size-[70px] rounded-lg"></div>
        <div className="size-[70px] rounded-lg"></div>
        <div className="size-[140px] rounded-full"></div>
        <div className="max-w-md mx-auto absolute top-[216px] left-[193px]">
          <Card value="night" img="night" condition="clear" />
        </div>
      </div>
    </div>
  );
}
