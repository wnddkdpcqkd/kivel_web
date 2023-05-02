"use client";
import { useEffect, useState } from "react";
import useMap from "../useMap";

export const Map = () => {
  // 현재 위치 받아오기
  //Map.tsx
  useMap();
  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};
