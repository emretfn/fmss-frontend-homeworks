//Context
import { useWeather } from "../context/WeatherContext";
//Components
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Text } from "@chakra-ui/layout";
//Icons
import { WeatherIcon } from "weather-react-icons";

//Props interface
interface ComponentProps {
  day: any;
}

const DayListItem = ({ day }: ComponentProps) => {
  //Get days array from context for day names
  const { days } = useWeather();

  return (
    // Chakra UI Card component
    <Card bgColor={"accent"} align="center" boxShadow="md">
      {/* Card Header for day name */}
      <CardHeader>
        <Text fontSize={"2xl"} fontWeight={"bold"} color={"bg2"}>
          {days[new Date(day.dt * 1000).getDay()]}
        </Text>
      </CardHeader>
      {/* Card Body for weather icon and description */}
      <CardBody
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
        fontSize="6xl"
        color={"bg2"}
      >
        <WeatherIcon iconId={day.weather[0].id} name="owm" night />
        <Text fontSize="xl" color="bg2" textTransform="capitalize">
          {day.weather[0].description}
        </Text>
      </CardBody>
      {/* Card Footer for high and low temperatures */}
      <CardFooter columnGap={4}>
        <Text as={"h3"} color={"bg2"} fontWeight="medium" fontSize="xl">
          H:{Math.round(day.temp.max)}°
        </Text>
        <Text as={"h3"} color={"bg"} fontWeight="medium" fontSize="xl">
          L:{Math.round(day.temp.min)}°
        </Text>
      </CardFooter>
    </Card>
  );
};

export default DayListItem;
