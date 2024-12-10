import { Header } from "./components/Header";
import { CurrentWeather } from "./components/CurrentWeather";
import { Card } from "./components/ui/card";
import { WeeklyWeather } from "./components/WeeklyWeather";
import { CityInput } from "./components/CityInput";
import { useState } from "react";
import { CityData } from "./types";
import { defaultCity } from "./constants";

export function App() {
  const [savedCity, setSavedCity] = useState<CityData>(defaultCity);

  return (
    <div className="p-7 bg-background dark min-h-screen font-poppins">
      <Header />
      <div className="flex justify-center w-full">
        <div className="w-[660px] flex flex-col gap-8">
          <CityInput setSavedCity={setSavedCity} />
          <Card>
            <CurrentWeather savedCity={savedCity} />
            <WeeklyWeather savedCity={savedCity} />
          </Card>
        </div>
      </div>
    </div>
  );
}
