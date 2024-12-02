import axios from "axios";

const geoApi=axios.create({
    baseURL: "https://geocoding-api.open-meteo.com/v1/",
    method: "GET",
})

export const searchCities= async (cityName: string) => {
    const response=geoApi.get(`search?name=${cityName}&count=5&language=en&format=json`)
    return response
}
