import { useEffect, useState } from "react";
import { CardFooter } from "./ui/card";
import { CityData, WeeklyWeatherData } from "@/types";
import { getWeeklyWeather } from "@/api/weather-api";
import { format } from "date-fns";
import { mapWeatherDetails } from "@/lib/utils";

export function WeeklyWeather({ savedCity }: { savedCity: CityData }) {
  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeatherData>();
  useEffect(() => {
    const getData = async () => {
      const response = await getWeeklyWeather(savedCity);
      setWeeklyWeather(response.data);
    };
    getData();
  }, [savedCity]);

  return (
    <CardFooter>
      <div className="flex justify-evenly w-full">
        {weeklyWeather?.daily.time.map((day, index) => {
          const Icon = mapWeatherDetails(
            weeklyWeather.daily.weather_code[index],
            true
          ).icon;
          return (
            <div className="flex flex-col items-center gap-2 hover:text-primary">
              <h1>{format(day, "E")}</h1>
              <Icon />
              <div className="flex justify-between text-xs">
                <span>
                  {Math.round(weeklyWeather.daily.temperature_2m_max[index])}°
                </span>
                <span className="text-muted-foreground">
                  {Math.round(weeklyWeather.daily.temperature_2m_min[index])}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </CardFooter>
  );
}
