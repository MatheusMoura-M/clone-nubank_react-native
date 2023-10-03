import React, { useState } from "react";
import { StatusBar } from "react-native";
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
  CurvedLine,
  ButtonOpacityEye,
} from "./style";

import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@components/ImageViewer";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type PropsHeader = {
  name: string;
};

const Header = ({ name }: PropsHeader) => {
  const [isPressedEye, setIsPressedEye] = useState(false);
  const [isPressedHelp, setIsPressedHelp] = useState(false);
  const [isPressedInvite, setIsPressedInvite] = useState(false);
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
          <ButtonOpacityEye
            bottom={10}
            left={9}
            activeOpacity={1}
            delayLongPress={300}
            isPressedEye={isPressedEye}
            onPress={() => setVisibleValues(!visibleValues)}
            onLongPress={() => setIsPressedEye(true)}
            onPressOut={() => setIsPressedEye(false)}
          >
            {visibleValues ? (
              <IconContainer paddingBottom={12}>
                <IconEyeBox>
                  <IconEye />
                </IconEyeBox>
                <IconEyeCircle top={5} left={7.8} width={8} height={8} />
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
          </ButtonOpacityEye>

          <ButtonOpacityEye
            isPressedHelp={isPressedHelp}
            bottom={10}
            left={5}
            activeOpacity={1}
            delayLongPress={300}
            onLongPress={() => setIsPressedHelp(true)}
            onPressOut={() => setIsPressedHelp(false)}
          >
            <FontAwesome5
              bottom={1.5}
              name="question-circle"
              size={22}
              color="white"
            />
          </ButtonOpacityEye>

          <ButtonOpacityEye
            isPressedInvite={isPressedInvite}
            bottom={8}
            left={0}
            activeOpacity={1}
            delayLongPress={300}
            onLongPress={() => setIsPressedInvite(true)}
            onPressOut={() => setIsPressedInvite(false)}
          >
            <IconContainer paddingTop={13} top={4} right={2}>
              <IconEyeCircle top={1} left={3} width={10} height={10} />

              <CurvedLine />

              <MaterialCommunityIcons
                name="email-outline"
                size={12}
                color="white"
                top={-10}
                right={-7}
              />
            </IconContainer>
          </ButtonOpacityEye>
        </BoxEnd>
      </Content>
    </Container>
  );
};

export default Header;
