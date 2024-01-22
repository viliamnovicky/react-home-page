import { useEffect, useState } from "react";
import { getPosition } from "../../services/apiGeolocation";

// export async function useGeolocation() {
//   const positionObj = await getPosition();
//   const lat = positionObj.coords.latitude
//   const lng = positionObj.coords.longitude
 
//   return {lat, lng}
// }

export function useGeolocation() {
  let [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }, [navigator.geolocation]);

  return location;
}
