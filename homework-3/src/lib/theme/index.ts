import { extendTheme } from "@chakra-ui/react";

// extend theme for chakra-ui
export const theme = extendTheme({
  colors: {
    text: "#3d264f",
    bg: "#f4faf3",
    bg2: "#20e79e",
    accent: "#5638b7",
  },
  fonts: {
    heading: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    body: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  components: {
    Text: {
      baseStyle: {
        color: "text",
      },
    },
  },
  styles: {
    global: (props: any) => ({
      html: {
        height: "100%",
      },
      body: {
        bg: "bg",
        color: "text",
        fontSize: "md",
        lineHeight: "tall",

        height: "100%",
      },
      "#root": {
        height: "100%",
      },
    }),
  },
});
