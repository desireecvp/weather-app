import { useState } from "react";
import { Input } from "./ui/input";
import { searchCities } from "@/api/geo-api";
import { CityData } from "@/types";

export function CityInput({
  setSavedCity,
}: {
  setSavedCity: React.Dispatch<React.SetStateAction<CityData>>;
}) {
  const [cityValue, setCityValue] = useState("");
  const [results, setResults] = useState<CityData[]>([]);

  async function handleChange(cityName: string) {
    setCityValue(cityName);

    if (cityName.length < 3) {
      return;
    }
    const response = await searchCities(cityName);
    setResults(response.data.results);
  }

  function handleClick(city: CityData) {
    setSavedCity(city);
    setResults([]);
    setCityValue("");
  }

  return (
    <div className="flex flex-col gap-0 ">
      <Input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search city..."
        className="text-white"
        value={cityValue}
      />
      <div className="relative">
        <div className="border w-full border-muted border-y-0 rounded-sm absolute z-50 bg-background">
          {results?.map((result) => {
            return (
              <div
                onClick={() => handleClick(result)}
                className="flex w-full border-b border-muted text-white shadow-md h-10 items-center p-4 gap-1 cursor-pointer"
              >
                <span>{result.name},</span>
                <span className="text-muted-foreground font-extralight">
                  {result.country}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
