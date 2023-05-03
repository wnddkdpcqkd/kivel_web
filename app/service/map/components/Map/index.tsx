"use client";
import { useEffect, useState } from "react";
import useMap from "../useMap";

export const Map = () => {
  // 현재 위치 받아오기
  //Map.tsx
  useMap();
  return (
    <div className="flex w-full h-full bg-red-400">
      <div id="map" className="flex w-full h-full" />
    </div>
  );
};
