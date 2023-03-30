//Components
import { Container, Stack } from "@chakra-ui/layout";
import DayList from "./components/DayList";
import Header from "./components/Header";

function App() {
  return (
    <Stack alignItems={"center"} width="100%" spacing={4}>
      <Header />
      <Container p={4} maxW="container.xl">
        <DayList />
      </Container>
    </Stack>
  );
}

export default App;
