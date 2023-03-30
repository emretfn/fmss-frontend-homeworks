//Hooks
import { createContext, useContext, useEffect, useState } from "react";
//Cities json
import Cities from "../lib/cities_of_turkey.json";
//Types
import { City, TWeatherContext } from "../lib/types";

//Create context with default values
const WeatherContext = createContext<TWeatherContext>({
  selectedCity: Cities[41],
  setSelectedCity: () => {},
  weatherData: [],
  setWeatherData: () => {},
  days: [],
});

//Props for WeatherContextProvider
type ProviderProps = {
  children: React.ReactNode;
};
//Context provider for WeatherContext
const WeatherContextProvider = ({ children }: ProviderProps) => {
  //States
  const [selectedCity, setSelectedCity] = useState<City>(Cities[0]);
  const [weatherData, setWeatherData] = useState<any>([]);

  //Days array for day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //Function for fetch weather data from api
  const fetchData = async (lat: string, lon: string) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${
      selectedCity.latitude
    }&lon=${
      selectedCity.longitude
    }&lang=en&exclude=current,minutely,hourly&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //Fetch weather data when selected city changes
  useEffect(() => {
    fetchData(selectedCity.latitude, selectedCity.longitude).then((data) => {
      setWeatherData(data);
    });
  }, [selectedCity]);

  const data = {
    selectedCity,
    setSelectedCity,
    weatherData,
    setWeatherData,
    days,
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};

//Custom hook for using WeatherContext
export const useWeather = () => useContext(WeatherContext);

export default WeatherContextProvider;
