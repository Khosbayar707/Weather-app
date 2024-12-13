import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";

export function SearchInput({ search, onChangeText, pressEnter }) {
  return (
    <input
      type="search"
      className="block w-full p-4 rounded-3xl mt-6"
      placeholder="City name..."
      required
      value={search}
      onChange={onChangeText}
      onKeyDown={pressEnter}
    />
  );
}
