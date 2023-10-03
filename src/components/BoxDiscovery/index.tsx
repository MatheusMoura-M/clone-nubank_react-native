import { selectedMessages } from "@utils/boxDiscovery";
import {
  Box,
  BoxImage,
  Container,
  ContainerScroll,
  Content,
  Span,
  SubTitle,
  Text,
  Title,
} from "./style";
import { Image } from "react-native";

const BoxDiscovery = () => {
  return (
    <Container>
      <Title>Descubra mais</Title>
      <ContainerScroll horizontal={true} showsHorizontalScrollIndicator={false}>
        {selectedMessages.map((item, index) => {
          const words = item.split(" ");

          // if (item.split(" ")[0] == "Prêmios") {
          //   return (
          //     <Box marginRight={index == 2 ? 52 : 15} key={index}>
          //       <Text>{words.slice(0, 4).join(" ")}</Text>
          //       <Text>{words.slice(4).join(" ")}</Text>
          //     </Box>
          //   );
          // } else if (item.split(" ")[0] == "85") {
          //   return (
          //     <Box marginRight={index == 2 ? 52 : 15} key={index}>
          //       <Span>
          //         {words.slice(0, 4).join(" ")}{" "}
          //         <Text>{words.slice(4, 6).join(" ")}</Text>
          //       </Span>
          //       <Text>{words.slice(6).join(" ")}</Text>
          //     </Box>
          //   );
          // } else if (item.split(" ")[0] == "Convide") {
          //   return (
          //     <Box marginRight={index == 2 ? 52 : 15} key={index}>
          //       <Span>{words.slice(0, 5).join(" ")}</Span>
          //       <Text>{words.slice(5).join(" ")}</Text>
          //     </Box>
          //   );
          // } else if (item.split(" ")[0] == "Pague") {
          //   return (
          //     <Box marginRight={index == 2 ? 52 : 15} key={index}>
          //       <Text>
          //         {words.slice(0, 1).join(" ")}{" "}
          //         <Span>{words.slice(1, 4).join(" ")}</Span>{" "}
          //         {words.slice(4, 5).join(" ")}
          //       </Text>
          //       <Text>{words.slice(5).join(" ")}</Text>
          //     </Box>
          //   );
          // } else if (item.split(" ")[0] == "Dinheiro") {
          //   return (
          //     <Box marginRight={index == 2 ? 52 : 15} key={index}>
          //       <Text>{words.slice(0, 4).join(" ")}</Text>
          //       <Span>
          //         {words.slice(4, 6).join(" ")}{" "}
          //         <Text>{words.slice(6).join(" ")}</Text>
          //       </Span>
          //     </Box>
          //   );
          // } else if (item.split(" ")[0] == "Pix") {
          //   return (
          //     <Box marginRight={index == 2 ? 52 : 15} key={index}>
          //       <Span>
          //         {words.slice(0, 3).join(" ")}{" "}
          //         <Text>{words.slice(3, 5).join(" ")}</Text>
          //       </Span>
          //       <Text>{words.slice(5).join(" ")}</Text>
          //     </Box>
          //   );
          // } else {
          //   return (
          //     <Box marginRight={index == 2 ? 52 : 15} key={index}>
          //       <Span>
          //         {words.slice(0, 3).join(" ")}{" "}
          //         <Text>{words.slice(3, 5).join(" ")}</Text>
          //       </Span>
          //       <Text>{words.slice(5).join(" ")}</Text>
          //     </Box>
          //   );
          // }
          return (
            <Box marginRight={index == 2 ? 52 : 15} key={index}>
              <BoxImage>
                <Image
                  source={require("../../assets/Aspect-ratio.jpg")}
                  style={{
                    width: "100%",
                    height: 120,
                    borderTopLeftRadius: 9,
                    borderTopRightRadius: 9,
                  }}
                  resizeMode={"stretch"}
                />
              </BoxImage>
              <Content>
                <SubTitle>Nubank Celular Seguro</SubTitle>
              </Content>
              {/* <Span>
                {words.slice(0, 3).join(" ")}{" "}
                <Text>{words.slice(3, 5).join(" ")}</Text>
              </Span>
              <Text>{words.slice(5).join(" ")}</Text> */}
            </Box>
          );
        })}
      </ContainerScroll>
    </Container>
  );
};

export default BoxDiscovery;
