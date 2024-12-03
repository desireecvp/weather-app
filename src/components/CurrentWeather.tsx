import { getCurrentWeather } from "@/api/weather-api";
import { useState, useEffect } from "react";
import { CardHeader, CardTitle, CardDescription } from "./ui/card";
import { CityData, CurrentWeatherData } from "@/types";
import { format } from "date-fns";
import { Cloud, CloudRain, LucideCloudSnow, Moon, Sun } from "lucide-react";

export function CurrentWeather({ savedCity }: { savedCity?: CityData }) {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>();

  useEffect(() => {
    const getResponse = async () => {
      const response = await getCurrentWeather(savedCity);
      setCurrentWeather(response.data);
    };
    getResponse();
  }, [savedCity]);

  function currentIcon() {
    if (currentWeather?.current.rain) {
      return <CloudRain />;
    }

    if ((currentWeather?.current.cloud_cover || 0) > 50) {
      return <Cloud />;
    }

    if (currentWeather?.current.snowfall) {
      return <LucideCloudSnow />;
    }

    if (currentWeather?.current.is_day) {
      return <Sun />;
    }
    return <Moon />;
  }

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
            {currentIcon()}
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
