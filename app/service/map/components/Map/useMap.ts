import { useEffect, useRef, useState } from "react";
import $ from "jquery";

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number } | string>("");
  const [zoom, setZoom] = useState<number>(16);
  useEffect(() => {
    $("#myLocationBtn").on("click", (e) => {
      e.preventDefault();
      window.alert("aaaa");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          let center = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
          mapRef.current.setCenter(center);
        });
      } else {
        window.alert("현재 위치를 알 수 없어 기본 위치로 지정합니다.");
        setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
      }
    });
  }, [myLocation]);

  useEffect(() => {
    $("#mapZoomIn").on("click", (e) => {
      e.preventDefault();
      const zoom = mapRef.current.getZoom();
      window.alert(zoom);
      mapRef.current.setZoom(zoom + 1, true);
      setZoom(zoom + 1);
    });

    $("#mapZoomOut").on("click", (e) => {
      e.preventDefault();
      const zoom = mapRef.current.getZoom();
      window.alert(zoom);
      mapRef.current.setZoom(zoom - 1, true);
      setZoom(zoom - 1);
    });
  }, [zoom]);
  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재 위치를 알 수 없어 기본 위치로 지정합니다.");
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoom: 16,
        zoomControl: false,
      });
    }
  }, [myLocation]);

  return {
    myLocation,
  };
}

export default useMap;
