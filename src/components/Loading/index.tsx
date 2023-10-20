import React from "react";
import { Image, StatusBar } from "react-native";
import { ContainerLoading } from "./style";

export const LoadIndicator = () => {
  return (
    <ContainerLoading>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#820ad1"}
        translucent
      />
      <Image
        source={require("../../assets/nubank-logo.png")}
        style={{ width: 85, height: 85 }}
        resizeMode="center"
      />
    </ContainerLoading>
  );
};
