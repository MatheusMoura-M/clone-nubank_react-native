import {
  Box85,
  BoxInvite,
  BoxMoney,
  BoxMyLimits,
  BoxPay,
  BoxPix,
  BoxPremios,
} from "@components/AllInfoBox";
import { Container } from "./style";
import { selectedMessages } from "@utils/RandomInfo/boxInfo";

const BoxInfoScroll = () => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      {selectedMessages.map((item, index) => {
        const words = item.split(" ");

        if (item.split(" ")[0] == "Prêmios") {
          return <BoxPremios key={index} index={index} words={words} />;
        } else if (item.split(" ")[0] == "85") {
          return <Box85 key={index} index={index} words={words} />;
        } else if (item.split(" ")[0] == "Convide") {
          return <BoxInvite key={index} index={index} words={words} />;
        } else if (item.split(" ")[0] == "Pague") {
          return <BoxPay key={index} index={index} words={words} />;
        } else if (item.split(" ")[0] == "Dinheiro") {
          return <BoxMoney key={index} index={index} words={words} />;
        } else if (item.split(" ")[0] == "Pix") {
          return <BoxPix key={index} index={index} words={words} />;
        } else {
          return <BoxMyLimits key={index} index={index} words={words} />;
        }
      })}
    </Container>
  );
};

export default BoxInfoScroll;
