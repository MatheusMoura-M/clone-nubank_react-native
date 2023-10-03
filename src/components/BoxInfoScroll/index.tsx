import { Box, Container, Span, Text } from "./style";
import { selectedMessages } from "@utils/boxInfo";

const BoxInfoScroll = () => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      {selectedMessages.map((item, index) => {
        const words = item.split(" ");

        if (item.split(" ")[0] == "Prêmios") {
          return (
            <Box marginRight={index == 2 ? 52 : 15} key={index}>
              <Text>{words.slice(0, 4).join(" ")}</Text>
              <Text>{words.slice(4).join(" ")}</Text>
            </Box>
          );
        } else if (item.split(" ")[0] == "85") {
          return (
            <Box marginRight={index == 2 ? 52 : 15} key={index}>
              <Span>
                {words.slice(0, 4).join(" ")}{" "}
                <Text>{words.slice(4, 6).join(" ")}</Text>
              </Span>
              <Text>{words.slice(6).join(" ")}</Text>
            </Box>
          );
        } else if (item.split(" ")[0] == "Convide") {
          return (
            <Box marginRight={index == 2 ? 52 : 15} key={index}>
              <Span>{words.slice(0, 5).join(" ")}</Span>
              <Text>{words.slice(5).join(" ")}</Text>
            </Box>
          );
        } else if (item.split(" ")[0] == "Pague") {
          return (
            <Box marginRight={index == 2 ? 52 : 15} key={index}>
              <Text>
                {words.slice(0, 1).join(" ")}{" "}
                <Span>{words.slice(1, 4).join(" ")}</Span>{" "}
                {words.slice(4, 5).join(" ")}
              </Text>
              <Text>{words.slice(5).join(" ")}</Text>
            </Box>
          );
        } else if (item.split(" ")[0] == "Dinheiro") {
          return (
            <Box marginRight={index == 2 ? 52 : 15} key={index}>
              <Text>{words.slice(0, 4).join(" ")}</Text>
              <Span>
                {words.slice(4, 6).join(" ")}{" "}
                <Text>{words.slice(6).join(" ")}</Text>
              </Span>
            </Box>
          );
        } else if (item.split(" ")[0] == "Pix") {
          return (
            <Box marginRight={index == 2 ? 52 : 15} key={index}>
              <Span>
                {words.slice(0, 3).join(" ")}{" "}
                <Text>{words.slice(3, 5).join(" ")}</Text>
              </Span>
              <Text>{words.slice(5).join(" ")}</Text>
            </Box>
          );
        } else {
          return (
            <Box marginRight={index == 2 ? 52 : 15} key={index}>
              <Span>
                {words.slice(0, 3).join(" ")}{" "}
                <Text>{words.slice(3, 5).join(" ")}</Text>
              </Span>
              <Text>{words.slice(5).join(" ")}</Text>
            </Box>
          );
        }
      })}
    </Container>
  );
};

export default BoxInfoScroll;
