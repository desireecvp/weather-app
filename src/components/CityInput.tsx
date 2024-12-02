import { useState } from "react"
import { Input } from "./ui/input"
import { searchCities } from "@/api/geo-api"

export function CityInput({setSavedCity}: {setSavedCity: React.Dispatch<React.SetStateAction<undefined>>}) {
    const [cityValue, setCityValue] = useState("")
    const [results, setResults] = useState([])


   async function handleChange(cityName: string) {
    setCityValue(cityName)

        if (cityName.length < 3) {
            return
        } 
        const response = await searchCities(cityName)
        setResults(response.data.results)

    }

        function handleClick(city) {
            setSavedCity(city)
            setResults([])
        }

   
    return (

        <div className="flex flex-col gap-0 ">
        <Input onChange={e => handleChange(e.target.value)} placeholder="city" className="text-white" value={cityValue}/>
        <div className="relative">

        <div className="border w-full border-muted rounded-sm absolute z-50 bg-background">
        {results?.map(result => {
            return (
                <div onClick={() => handleClick(result)} className="flex w-full border-t border-muted rounded-md text-white shadow-md h-10 items-center p-4 gap-1 ">
                    <span>{result.name},</span>
                    <span className="text-muted-foreground font-extralight">{result.country}</span>
                </div>
            )
        })}
        </div>
        </div>
        </div>
    )


}
