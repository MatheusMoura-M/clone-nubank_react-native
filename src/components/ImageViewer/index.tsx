import { Image, View } from "react-native";
import {
  Circle,
  IconWrapper,
  InnerContainer,
  Line,
  RotatedLine,
  Square,
} from "./style";

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
    <View>
      <InnerContainer>
        <IconWrapper name="image-frame" size={24} color={"#fff"} />
      </InnerContainer>

      <Square>
        <Line />
        <RotatedLine />
      </Square>
      <Circle />
    </View>
  );
}
