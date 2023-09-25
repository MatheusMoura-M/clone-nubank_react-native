import React from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

type ImageViewerProps = {
  selectedImage: string;
};

export default function ImageViewer({ selectedImage }: ImageViewerProps) {
  return selectedImage ? (
    <Image
      source={{ uri: selectedImage }}
      style={{ width: 44, height: 44, borderRadius: 22 }}
    />
  ) : (
    <Image
      source={require("../../assets/Aspect-ratio.jpg")}
      style={{ width: 44, height: 44, borderRadius: 22 }}
    />
    // <Feather name="user" size={27} color={"#fff"} />
  );
}
