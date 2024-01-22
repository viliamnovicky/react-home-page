import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../services/apiWeather";
import { useGeolocation } from "./useGeolocation";

export function useWeatherData(lat, long) {
    const position = useGeolocation();
    const {isLoading, data: weatherData, error} = useQuery({
        queryKey: ["weather"],
        queryFn: () => getWeather(position.lat, position.lng)
    })
    console.log(weatherData)
    return {isLoading, error, weatherData}
} 