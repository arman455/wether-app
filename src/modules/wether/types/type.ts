
export interface ICountry {
    id: number,
    name: string;
    iso2: string;
    uk: string;
}

export interface ICity{
    id: number,
    name: string,
}

export interface WeatherCondition {
    text: string;
    icon: string;
}

export interface CurrentWeather {
    temp_c: number;
    condition: WeatherCondition;
}

export interface ForecastHour {
    time: string;
    temp_c: number;
    condition: WeatherCondition;
    precip_mm: number;
}

export interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: WeatherCondition;
    };
    astro: {
        sunrise: string;
        sunset: string;
    };
    hour: ForecastHour[];
}

export interface LocationInfo {
    name: string;
    country: string;
}

export interface WeatherApiResponse {
    location: LocationInfo;
    current: CurrentWeather;
    forecast: {
        forecastday: ForecastDay[];
    };
}

export interface WeatherData {
    location: LocationInfo;
    current: {
        temp_c: number;
        condition: string;
        icon: string;
        max_today: number;
        min_today: number;
    };
    sunrise: string;
    sunset: string;
    hourly: {
        time: string;
        temp_c: number;
        condition: string;
        icon: string;
        precip_mm: number;
    }[];
    daily: {
        date: string;
        max: number;
        min: number;
        condition: string;
        icon: string;
    }[];
}