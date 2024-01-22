import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../services/apiWeather";
import { useGeolocation } from "./useGeolocation";
import { useEffect, useState } from "react";

export function useWeatherData(lat, long) {
    const position = useGeolocation();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (position.lat && position.lng) {
            setIsLoading(true);
            getWeather(position.lat, position.lng)
                .then((data) => {
                    setWeatherData(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setIsLoading(false);
                });
        }
    }, [position.lat, position.lng]);

    return { isLoading, error, weatherData };
}