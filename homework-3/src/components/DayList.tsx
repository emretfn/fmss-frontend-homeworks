//Context
import { useWeather } from "../context/WeatherContext";

//Components
import DayListItem from "./DayListItem";
import { Grid, GridItem } from "@chakra-ui/layout";

const DayList = () => {
  //Get weather data from context
  const { weatherData } = useWeather();

  return (
    <Grid
      // For responsive design
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
    >
      {/* Map days data */}
      {weatherData?.daily?.map((day: any) => {
        return (
          <GridItem
            // For the first item
            _first={{
              "> .chakra-card": {
                backgroundColor: "#3d264f",
              },
            }}
            key={day.dt}
          >
            <DayListItem day={day} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default DayList;
