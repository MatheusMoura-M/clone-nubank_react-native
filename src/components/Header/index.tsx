import React, { useState } from "react";
import {
  Container,
  Content,
  Username,
  ButtonUser,
  BoxEnd,
  BoxStart,
  IconEye,
  IconEyeContainer,
  IconEyeCircle,
  Text,
} from "./style";
import { StatusBar, View } from "react-native";

import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@components/ImageViewer";

type PropsHeader = {
  name: string;
};

const Header = ({ name }: PropsHeader) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight + 22
    : 64;

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }

    return null;
  };

  return (
    <Container statusBarHeight={statusBarHeight}>
      <Content
        from={{ translateY: -150, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 800, delay: 300 }}
      >
        <BoxStart>
          <ButtonUser activeOpacity={0.9} onPress={handlePickImage}>
            <ImageViewer selectedImage={selectedImage} />
          </ButtonUser>

          <Username
            from={{ translateX: -300 }}
            animate={{ translateX: 0 }}
            transition={{ type: "timing", duration: 800, delay: 800 }}
          >
            <Text>Olá, {name.split(" ")[0]}</Text>
          </Username>
        </BoxStart>

        <BoxEnd>
          <View>
            <IconEyeContainer>
              <IconEye />
            </IconEyeContainer>
            <IconEyeCircle />
          </View>
        </BoxEnd>
      </Content>
    </Container>
  );
};

export default Header;
