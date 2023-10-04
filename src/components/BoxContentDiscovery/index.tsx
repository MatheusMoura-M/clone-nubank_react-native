import { MessagesProps } from "@components/BoxDiscovery";
import { Content, SubTitle, Span } from "./style";
import ButtonDiscovery from "@components/ButtonDiscovery";

const BoxContentDiscovery = ({ item }: { item: MessagesProps }) => {
  return (
    <Content>
      <SubTitle>{item.title}</SubTitle>

      <Span numberOfLines={2} ellipsizeMode="tail">
        {item.subTitle}
      </Span>

      <ButtonDiscovery
        width={item.widthButton}
        height={item.heightButton}
        text={item.buttonText}
      />
    </Content>
  );
};

export default BoxContentDiscovery;
