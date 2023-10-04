import { ButtonContainer, ButtonText } from "./style";

type widthVariant = 105 | 145 | 155 | number;

type ButtonDiscoveryProps = {
  width: widthVariant;
  height: number;
  text: string;
};

const ButtonDiscovery = ({ width, height, text }: ButtonDiscoveryProps) => {
  return (
    <ButtonContainer width={width} height={height} activeOpacity={1}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonDiscovery;
