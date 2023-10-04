import { getRandomMessages } from "@utils/boxDiscovery";
import { Box, BoxImage, Container, ContainerScroll, Title } from "./style";
import { Image, ImageSourcePropType } from "react-native";
import { useEffect, useState } from "react";
import BoxContentDiscovery from "@components/BoxContentDiscovery";

export type MessagesProps = {
  title: string;
  subTitle: string;
  buttonText: string;
  widthButton: number;
  heightButton: number;
  imageUrl: ImageSourcePropType;
};

const BoxDiscovery = () => {
  const [messages, setMessages] = useState<MessagesProps[]>([]);

  useEffect(() => {
    const updateMessages = () => {
      const newMessages = getRandomMessages();
      setMessages(newMessages);
    };

    const intervalId = setInterval(updateMessages, 25000);

    updateMessages();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Title>Descubra mais</Title>
      <ContainerScroll horizontal={true} showsHorizontalScrollIndicator={false}>
        {messages.map((item, index) => {
          return (
            <Box marginRight={index == 4 ? 25 : 15} key={index}>
              <BoxImage>
                <Image
                  source={item.imageUrl}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: 9,
                    borderTopRightRadius: 9,
                  }}
                  resizeMode={"stretch"}
                />
              </BoxImage>

              <BoxContentDiscovery item={item} />
            </Box>
          );
        })}
      </ContainerScroll>
    </Container>
  );
};

export default BoxDiscovery;
