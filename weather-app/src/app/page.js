import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[screen] bg-[#F3F4F6]">
        <div className="max-w-md mx-auto">
          <input
            type="search"
            className="block w-full p-4 rounded-3xl mt-6"
            placeholder="Search..."
            required
          />
          <div className="w-[100%] h-[600px] bg-[#FFFFFFBF] mt-[110px] rounded-3xl"></div>
        </div>
      </div>
      <div className="w-[50%] h-[screen] bg-[#0F141E]">
        <div className="max-w-md mx-auto">
          <div className="w-[100%] h-[600px] bg-[#111827BF] mt-[210px] rounded-3xl border-purple-950"></div>
        </div>
      </div>
    </div>
  );
}
