import { getCurrentWeather } from "@/api/weather-api";
import { useState, useEffect } from "react";
import { CardHeader, CardTitle, CardDescription } from "./ui/card";
import { CityData, CurrentWeatherData } from "@/types";
import { format } from "date-fns";
import { WeatherIcon } from "./WeatherIcon";

export function CurrentWeather({ savedCity }: { savedCity?: CityData }) {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>();

  useEffect(() => {
    const getResponse = async () => {
      const response = await getCurrentWeather(savedCity);
      setCurrentWeather(response.data);
    };
    getResponse();
  }, [savedCity]);

  console.log(currentWeather);

  if (currentWeather === undefined) {
    return "loading";
  }
  return (
    <CardHeader>
      <CardTitle>
        <div className="flex justify-between">
          <h1>{savedCity?.name}</h1>
          <div className="flex flex-col gap-2 items-center">
            <WeatherIcon
              isDay={!!currentWeather.current.is_day}
              weatherCode={currentWeather.current.weather_code}
            />
          </div>
        </div>
      </CardTitle>
      <CardDescription className="flex justify-between">
        {format(currentWeather.current.time, "PPPP")}
        <h2 className="font-bold text-2xl text-foreground">
          {Math.round(currentWeather?.current?.temperature_2m || 0)}°C
        </h2>
      </CardDescription>
    </CardHeader>
  );
}
