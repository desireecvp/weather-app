type BaseWeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms?: number;
  utc_offset_seconds?: number;
  timezone: string;
  timezone_abbreviation?: string;
  elevation: number;
};

export interface CurrentWeatherData extends BaseWeatherData {
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    is_day: number;
    rain: number;
    showers: number;
    snowfall: number;
    cloud_cover: number;
    weather_code: number;
  };
}

export interface WeeklyWeatherData extends BaseWeatherData {
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

export interface CityData extends BaseWeatherData {
  id: number;
  name: string;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin3_id: number;
  admin4_id: number;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin3: string;
  admin4: string;
}
