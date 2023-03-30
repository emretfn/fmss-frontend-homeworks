//Context
import { useWeather } from "../context/WeatherContext";
//Cities json
import Cities from "../lib/cities_of_turkey.json";
//Components
import { Box, Center, Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
//Types
import { City } from "../lib/types";

const Header = () => {
  //Get selected city and set selected city from context

  const { selectedCity, setSelectedCity } = useWeather();
  return (
    <Stack width={"100%"}>
      {/* Header */}
      <Center fontWeight="bold" height="16" bgColor="bg2" fontSize="4xl">
        Weather App
      </Center>
      {/* Select box for city select */}
      <Box p={4}>
        <Select
          size="lg"
          // Responsive width
          width={{
            base: "100%",
            md: "50%",
            lg: "25%",
          }}
          placeholder="Select a city..."
          focusBorderColor="accent"
          mx={"auto"}
          //Selected city as a value
          value={selectedCity?.id}
          // Set selected city
          onChange={(e) => {
            const city = Cities.find(
              (city: City) => city.id === Number(e.target.value)
            );
            if (city) setSelectedCity(city);
          }}
        >
          {/* Map cities for options */}
          {Cities.map((city) => {
            return (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            );
          })}
        </Select>
      </Box>
    </Stack>
  );
};

export default Header;
