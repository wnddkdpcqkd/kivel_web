"use client";

import { useEffect, useRef } from "react";

export default function SubMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  useEffect(() => {
    mapRef.current = new naver.maps.Map("subMap", {
      zoom: 16,
      zoomControl: false,
      maxZoom: 18,
      minZoom: 14,
    });
  }, []);

  return <div className="w-full aspect-[8/3]" id="subMap" />;
}
