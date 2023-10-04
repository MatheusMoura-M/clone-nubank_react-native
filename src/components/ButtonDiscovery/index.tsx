import { ButtonContainer, Text } from "./style";

type widthVariant = 105 | 145 | 155 | number;

type ButtonDiscoveryProps = {
  width: widthVariant;
  height: number;
  text: string;
};

const ButtonDiscovery = ({ width, height, text }: ButtonDiscoveryProps) => {
  return (
    <ButtonContainer width={width} height={height} activeOpacity={1}>
      <Text>{text}</Text>
    </ButtonContainer>
  );
};

export default ButtonDiscovery;
