import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../services/apiWeather";

export function useWeatherData(lat, long) {
    const {isLoading, data: weatherData, error} = useQuery({
        queryKey: ["weather"],
        queryFn: () => getWeather(lat, long)
    })
    return {isLoading, error, weatherData}
} 