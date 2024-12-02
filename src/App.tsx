import { Header } from "./components/Header";
import { CurrentWeather } from "./components/CurrentWeather";
import { Card, CardContent} from "./components/ui/card";
import { WeeklyWeather } from "./components/WeeklyWeather";
import { CityInput } from "./components/CityInput";
import { useState } from "react";



export function App() {

  const [savedCity, setSavedCity] = useState()
  return (
    <div className="p-5 bg-background dark min-h-screen">
      <Header />
      <div className="flex justify-center w-full">
        <div className="w-[460px] flex flex-col gap-8">
        <CityInput setSavedCity={setSavedCity} />
        <Card>
       <CurrentWeather savedCity={savedCity}/>


  <CardContent>
    <p>Card Content</p>
    </CardContent>
    <WeeklyWeather savedCity={savedCity}/>
    </Card>

        </div>
      </div>
    </div>
  )
}

