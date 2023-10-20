import { BackgroundVariant, ButtonContainer, ButtonText } from "./style";

type ButtonCreditCardProps = {
  width: number;
  height: number;
  text: string;
  backgroundColor: BackgroundVariant;
  fixedColor: boolean;
};

const ButtonCreditCard = ({
  width,
  height,
  text,
  backgroundColor,
  fixedColor,
}: ButtonCreditCardProps) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      width={width}
      height={height}
    >
      <ButtonText fixedColor={fixedColor}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonCreditCard;
