import { useEffect, useState } from "react";
import { CardFooter } from "./ui/card";
import { WeeklyWeatherData } from "@/types";
import { getWeeklyWeather } from "@/api/weather-api";
import {format} from "date-fns"

export function WeeklyWeather({savedCity}) {
    const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeatherData>()
    console.log(savedCity)
    useEffect(() => {
        const getData=async () => {
            const response=await getWeeklyWeather(savedCity)
            setWeeklyWeather(response.data)
        } 
        getData()
    }, [savedCity])

 


    return (
        <CardFooter>
            <div className="flex justify-evenly w-full">
                {weeklyWeather?.daily.time.map((day,index) => {
                    return (
                        <div className="flex flex-col items-center">
                        <h1>{format(day,"E")}</h1>
                        <div className="flex justify-between text-xs">
                        <span>{Math.round(weeklyWeather.daily.temperature_2m_max[index])}°</span>
                        <span className="text-muted-foreground">{Math.round(weeklyWeather.daily.temperature_2m_min[index])}°</span>
                        </div>
                    </div>
                    )
                })}
             

            </div>
        </CardFooter>
    )
}