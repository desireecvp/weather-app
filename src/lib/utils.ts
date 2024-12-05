import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { icons } from "lucide-react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mapWeatherDetails(weatherCode: number, isDay: boolean) {
  switch (weatherCode) {
    case 0:
    case 1:
      if (isDay) {
        return {
          icon: icons.Sun,
          phrase: "The weather today is Sunny!",
        };
      }
      return {
        icon: icons.Moon,
        phrase: "Nightime",
      };
    case 2:
      if (isDay) {
        return {
          icon: icons.CloudSun,
          phrase: "Sun with clouds in the sky",
        };
      }
      return {
        icon: icons.CloudMoon,
        phrase: "Nightime",
      };
    case 3:
      return {
        icon: icons.Cloud,
        phrase: "Cloudy day",
      };
    case 45:
    case 48:
      return {
        icon: icons.CloudFog,
        phrase: "Fog with clouds",
      };
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return {
        icon: icons.CloudDrizzle,
        phrase: "Light Drizzle",
      };
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return {
        icon: icons.CloudRain,
        phrase: "Rainy Day",
      };
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return {
        icon: icons.CloudSnow,
        phrase: "Snowy Day",
      };
    case 80:
    case 81:
    case 82:
      return {
        icon: icons.CloudRainWind,
        phrase: "Rain with wind",
      };
    case 95:
    case 96:
    case 99:
      return {
        icon: icons.CloudLightning,
        phrase: "Rain and lighting",
      };
    default:
      return {
        icon: icons.Sun,
        phrase: "Sunny day",
      };
  }
}
