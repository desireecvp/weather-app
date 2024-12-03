import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudRainWindIcon,
  CloudSnow,
  CloudSun,
  Moon,
  Sun,
} from "lucide-react";

export function WeatherIcon({
  weatherCode,
  isDay = true,
}: {
  weatherCode: number;
  isDay?: boolean;
}) {
  switch (weatherCode) {
    case 0:
    case 1:
      if (isDay) {
        return <Sun />;
      }
      return <Moon />;
    case 2:
      if (isDay) {
        return <CloudSun />;
      }
      return <CloudMoon />;

    case 3:
      return <Cloud />;
    case 45:
    case 48:
      return <CloudFog />;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return <CloudDrizzle />;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return <CloudRain />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <CloudSnow />;
    case 80:
    case 81:
    case 82:
      return <CloudRainWindIcon />;
    case 95:
    case 96:
    case 99:
      return <CloudLightning />;

    default:
      return <Sun />;
  }
}
