export type TWeatherContext = {
  selectedCity: City | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<City>>;
  weatherData: any;
  setWeatherData: React.Dispatch<React.SetStateAction<any>>;
  days: string[];
};

export type City = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  population: number;
  region: string;
};
