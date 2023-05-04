"use client";
import { useEffect, useState } from "react";
import useMap from "./useMap";
import MyLocation from "./MyLocation";
import ZoomController from "./ZoomController";

export const Map = () => {
  // 현재 위치 받아오기
  //Map.tsx
  useMap();

  return (
    <div className="flex w-full h-full bg-red-400 relative">
      <div id="map" className="flex w-full h-full" />

      <div className="absolute top-5 right-4">
        <MyLocation onClick={() => {}}></MyLocation>

        <div className="flex flex-row my-4 justify-end">
          <ZoomController onClickAdd={() => {}} onClickSub={() => {}} />
        </div>
      </div>
    </div>
  );
};
