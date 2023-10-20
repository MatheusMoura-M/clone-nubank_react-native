import { ButtonContainer, ButtonText } from "./style";

type widthVariant = 105 | 145 | 155 | number;

type ButtonDiscoveryProps = {
  fontSize?: number;
  paddingTop?: number;
  marginTop?: number;
  width: widthVariant;
  height: number;
  text: string;
};

const ButtonDiscovery = ({
  width,
  height,
  text,
  marginTop,
  fontSize,
  paddingTop,
}: ButtonDiscoveryProps) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      marginTop={marginTop}
      activeOpacity={1}
    >
      <ButtonText fontSize={fontSize} paddingTop={paddingTop}>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
};

export default ButtonDiscovery;
