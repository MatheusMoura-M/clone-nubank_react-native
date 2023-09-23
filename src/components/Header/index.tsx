import React from "react";
import { Container, Content, Username, ButtonUser } from "./style";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "react-native";

type PropsHeader = {
  name: string;
};

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

const Header = ({ name }: PropsHeader) => {
  return (
    <Container statusBarHeight={statusBarHeight}>
      <Content
        from={{ translateY: -150, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 800, delay: 300 }}
      >
        <Username
          from={{ translateX: -300 }}
          animate={{ translateX: 0 }}
          transition={{ type: "timing", duration: 800, delay: 800 }}
        >
          {name}
        </Username>

        <ButtonUser activeOpacity={0.9}>
          <Feather name="user" size={27} color={"#fff"} />
        </ButtonUser>
      </Content>
    </Container>
  );
};

export default Header;
