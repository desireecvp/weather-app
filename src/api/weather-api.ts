import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
  method: "GET",
});

export async function getCurrentWeather(city) {
  const response = await weatherApi.get(
    `forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,is_day,rain,showers,snowfall,cloud_cover`
  );
  return response;
}

export async function getWeeklyWeather(city) {
  const response = await weatherApi.get(
    `forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min`
  );
  return response;
}
