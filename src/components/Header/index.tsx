import React, { useState } from "react";
import { StatusBar, TouchableWithoutFeedback } from "react-native";
import {
  Container,
  Content,
  Username,
  ButtonUser,
  BoxEnd,
  BoxStart,
  IconEye,
  IconEyeBox,
  IconEyeCircle,
  Text,
  EyeClosed,
  Lashes,
  Lash,
  IconContainer,
} from "./style";

import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@components/ImageViewer";

import { FontAwesome5 } from "@expo/vector-icons";

type PropsHeader = {
  name: string;
};

const Header = ({ name }: PropsHeader) => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [visibleValues, setVisibleValues] = useState<boolean>(true);

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
          <TouchableWithoutFeedback
            onPress={() => setVisibleValues(!visibleValues)}
            style={{ minWidth: 23 }}
          >
            {visibleValues ? (
              <IconContainer paddingTop={5}>
                <IconEyeBox>
                  <IconEye />
                </IconEyeBox>
                <IconEyeCircle />
              </IconContainer>
            ) : (
              <IconContainer paddingTop={7}>
                <EyeClosed>
                  <Lashes />
                </EyeClosed>
                <Lash top={10} left={0} transformRotate={-45} />
                <Lash top={14.4} left={6.5} transformRotate={-70} />
                <Lash top={14.4} left={15} transformRotate={-115} />
                <Lash top={11} left={20.5} transformRotate={40} />
              </IconContainer>
            )}
          </TouchableWithoutFeedback>

          <FontAwesome5 name="question-circle" size={22} color="white" />
        </BoxEnd>
      </Content>
    </Container>
  );
};

export default Header;
