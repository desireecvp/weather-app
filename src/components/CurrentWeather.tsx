import { getCurrentWeather } from "@/api/weather-api";
import { useState, useEffect } from "react";
import { CardHeader, CardTitle, CardDescription } from "./ui/card";
import { CurrentWeatherData } from "@/types";
import {format} from "date-fns"


export function CurrentWeather({savedCity}) {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>()
  
    useEffect(() => {
      const getResponse=async () => {
        const response=await getCurrentWeather(savedCity)
       setCurrentWeather(response.data)
      }
      getResponse()
    }, [savedCity])

    // console.log(currentWeather)
    
    if(currentWeather === undefined) {
        return"loading"
    }
    return (
     
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between">
              <h1>{savedCity?.name}</h1>
              <h2>{Math.round(currentWeather?.current?.temperature_2m || 0)}°C
              </h2>
            </div>
          </CardTitle>
          <CardDescription>{format(currentWeather.current.time,"PPPP")}</CardDescription>
        </CardHeader>
    
    )
}