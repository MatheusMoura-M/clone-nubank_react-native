import { HomeProps } from "@screens/Home";
import { Box, Container, Container2, Span, Text } from "./style";
import HTML from "react-native-render-html";
import { contentWidth, selectedMessages } from "@utils/boxInfo";

const BoxInfoScroll = ({ theme }: HomeProps) => {
  const stylesHtml = {
    p: {
      // color: "#7e7e28",
      fontSize: 13,
    },

    span: {
      color: theme.COLORS.PURPLE_DARK,
    },
  };

  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      {selectedMessages.map((item, index) => {
        const words = item.split(" ");

        if (item.split(" ")[0] == "Prêmios") {
          return (
            <Box marginRight={index == 2 ? 40 : 11} key={index}>
              <Text>
                {words.slice(0, 4).join(" ")}
                {"         "}
                <Span>{words.slice(4).join(" ")}</Span>
              </Text>
            </Box>
          );
        } else if (item.split(" ")[0] == "85") {
          return (
            <Box marginRight={index == 2 ? 40 : 11} key={index}>
              <Span>
                {words.slice(0, 4).join(" ")}{" "}
                <Text>{words.slice(4).join(" ")}</Text>
              </Span>
            </Box>
          );
        } else if (item.split(" ")[0] == "Convide") {
          return (
            <Box marginRight={index == 2 ? 40 : 11} key={index}>
              <Span>
                {words.slice(0, 5).join(" ")}
                {"          "}
                <Text>{words.slice(5).join(" ")}</Text>
              </Span>
            </Box>
          );
        } else if (item.split(" ")[0] == "Pague") {
          return (
            <Box marginRight={index == 2 ? 40 : 11} key={index}>
              <Text>
                {words.slice(0, 1).join(" ")}{" "}
                <Span>{words.slice(1, 3).join(" ")}</Span>{" "}
                {words.slice(3, 5).join(" ")}
                {"          "}
                {words.slice(5).join(" ")}
              </Text>
            </Box>
          );
        } else if (item.split(" ")[0] == "Dinheiro") {
          return (
            <Box marginRight={index == 2 ? 40 : 11} key={index}>
              <Text>
                {words.slice(0, 4).join(" ")}
                {"        "}
                <Span>{words.slice(4, 6).join(" ")}</Span>{" "}
                {words.slice(6).join(" ")}
              </Text>
            </Box>
          );
        } else if (item.split(" ")[0] == "Pix") {
          return (
            <Box marginRight={index == 2 ? 40 : 11} key={index}>
              <Span>
                {words.slice(0, 3).join(" ")}{" "}
                <Text>
                  {words.slice(3, 5).join(" ")}
                  {"        "}
                  {words.slice(5).join(" ")}
                </Text>
              </Span>
            </Box>
          );
        } else {
          return (
            <Box marginRight={index == 2 ? 40 : 11} key={index}>
              <Span>
                {words.slice(0, 3).join(" ")}{" "}
                <Text>
                  {words.slice(3, 5).join(" ")}
                  {"  "}
                  {words.slice(5).join(" ")}
                </Text>
              </Span>
            </Box>
          );
        }
      })}
    </Container>
  );
};

export default BoxInfoScroll;
