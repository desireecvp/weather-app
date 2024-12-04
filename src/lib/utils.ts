import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { icons } from "lucide-react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mapWeatherDetails(weatherCode: number, isDay?: boolean) {
  switch (weatherCode) {
    case 0:
    case 1:
      if (isDay) {
        return {
          icon: icons.Sun,
          phrase: "today is sunny",
        };
      }
      return {
        icon: icons.Moon,
        phrase: "nightime",
      };
    case 2:
      if (isDay) {
        return {
          icon: icons.CloudSun,
          phrase: "sun and clouds",
        };
      }
      return {
        icon: icons.CloudMoon,
        phrase: "sun and clouds",
      };
    case 3:
      return {
        icon: icons.Cloud,
        phrase: "sun and clouds",
      };
    case 45:
    case 48:
      return {
        icon: icons.CloudFog,
        phrase: "sun and clouds",
      };
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return {
        icon: icons.CloudDrizzle,
        phrase: "sun and clouds",
      };
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return {
        icon: icons.CloudRain,
        phrase: "sun and clouds",
      };
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return {
        icon: icons.CloudSnow,
        phrase: "sun and clouds",
      };
    case 80:
    case 81:
    case 82:
      return {
        icon: icons.CloudRainWind,
        phrase: "sun and clouds",
      };
    case 95:
    case 96:
    case 99:
      return {
        icon: icons.CloudLightning,
        phrase: "sun and clouds",
      };
    default:
      return {
        icon: icons.Sun,
        phrase: "sun and clouds",
      };
  }
}
