import { getPosition } from "../../services/apiGeolocation";

export async function useGeolocation() {
  const positionObj = await getPosition();
  const lat = positionObj.coords.latitude
  const lng = positionObj.coords.longitude
 
  return {lat, lng}
}

