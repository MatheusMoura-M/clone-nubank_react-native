import { BackgroundVariant, Box, Container } from "./style";

type HideValueProps = {
  width: number;
  height: number;
  backgroundColor: BackgroundVariant;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
};

const HideValue = ({
  width,
  height,
  backgroundColor,
  ...rest
}: HideValueProps) => {
  return (
    <Container {...rest}>
      <Box width={width} height={height} backgroundColor={backgroundColor} />
      <Box width={width} height={height} backgroundColor={backgroundColor} />
      <Box width={width} height={height} backgroundColor={backgroundColor} />
      <Box width={width} height={height} backgroundColor={backgroundColor} />
    </Container>
  );
};

export default HideValue;
