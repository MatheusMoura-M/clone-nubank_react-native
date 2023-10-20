import { Box, Span, Text } from "./style";

type BoxProps = {
  index: number;
  words: string[];
};

const BoxPremios = ({ index, words }: BoxProps) => {
  return (
    <Box marginRight={index == 2 ? 52 : 15}>
      <Text>{words.slice(0, 4).join(" ")}</Text>
      <Text>{words.slice(4).join(" ")}</Text>
    </Box>
  );
};

const Box85 = ({ index, words }: BoxProps) => {
  return (
    <Box marginRight={index == 2 ? 52 : 15} key={index}>
      <Span>
        {words.slice(0, 4).join(" ")} <Text>{words.slice(4, 6).join(" ")}</Text>
      </Span>
      <Text>{words.slice(6).join(" ")}</Text>
    </Box>
  );
};

const BoxInvite = ({ index, words }: BoxProps) => {
  return (
    <Box marginRight={index == 2 ? 52 : 15} key={index}>
      <Span>{words.slice(0, 5).join(" ")}</Span>
      <Text>{words.slice(5).join(" ")}</Text>
    </Box>
  );
};

const BoxPay = ({ index, words }: BoxProps) => {
  return (
    <Box marginRight={index == 2 ? 52 : 15} key={index}>
      <Text>
        {words.slice(0, 1).join(" ")} <Span>{words.slice(1, 4).join(" ")}</Span>{" "}
        {words.slice(4, 5).join(" ")}
      </Text>
      <Text>{words.slice(5).join(" ")}</Text>
    </Box>
  );
};

const BoxMoney = ({ index, words }: BoxProps) => {
  return (
    <Box marginRight={index == 2 ? 52 : 15} key={index}>
      <Text>{words.slice(0, 4).join(" ")}</Text>
      <Span>
        {words.slice(4, 6).join(" ")} <Text>{words.slice(6).join(" ")}</Text>
      </Span>
    </Box>
  );
};

const BoxPix = ({ index, words }: BoxProps) => {
  return (
    <Box marginRight={index == 2 ? 52 : 15} key={index}>
      <Span>
        {words.slice(0, 3).join(" ")} <Text>{words.slice(3, 5).join(" ")}</Text>
      </Span>
      <Text>{words.slice(5).join(" ")}</Text>
    </Box>
  );
};

const BoxMyLimits = ({ index, words }: BoxProps) => {
  return (
    <Box marginRight={index == 2 ? 52 : 15} key={index}>
      <Span>
        {words.slice(0, 3).join(" ")} <Text>{words.slice(3, 5).join(" ")}</Text>
      </Span>
      <Text>{words.slice(5).join(" ")}</Text>
    </Box>
  );
};

export { BoxPremios, Box85, BoxInvite, BoxPay, BoxMoney, BoxPix, BoxMyLimits };
