import { useState, useEffect, useCallback } from "react";
import { WeatherApiResponse, WeatherData } from "../types/type";
import { Weather_Api } from "../../../settings/settings";
import { transliterate } from "transliteration";

export function useWeather(
    city: string,
    days: number = 10
) {
    const [data, setData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchWeather = useCallback(async () => {
        if (!city || !Weather_Api) return;
        setLoading(true);
        setError(null);

        try {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${Weather_Api}&q=${transliterate(city)}&days=${days}&lang=uk`;

            const res = await fetch(url);
            if (!res.ok) throw new Error("Weather API error");
            const json: WeatherApiResponse = await res.json();

            const current = {
                temp_c: json.current.temp_c,
                condition: json.current.condition.text,
                icon: `https:${json.current.condition.icon}`,
                max_today: json.forecast.forecastday[0].day.maxtemp_c,
                min_today: json.forecast.forecastday[0].day.mintemp_c,
            };

            const astro = {
                sunrise: json.forecast.forecastday[0].astro.sunrise,
                sunset: json.forecast.forecastday[0].astro.sunset,
            };

            const hourly = json.forecast.forecastday[0].hour.map((h) => ({
                time: h.time,
                temp_c: h.temp_c,
                condition: h.condition.text,
                icon: `https:${h.condition.icon}`,
                precip_mm: h.precip_mm,
            }));

            const daily = json.forecast.forecastday.map((d) => ({
                date: d.date,
                max: d.day.maxtemp_c,
                min: d.day.mintemp_c,
                condition: d.day.condition.text,
                icon: `https:${d.day.condition.icon}`,
            }));

            setData({
                location: json.location,
                current,
                ...astro,
                hourly,
                daily,
            });
        } catch (err) {
            setError(err as Error);
            setData(null);
        } finally {
            setLoading(false);
        }
    }, [city, Weather_Api, days]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    return { data, loading, error };
}
