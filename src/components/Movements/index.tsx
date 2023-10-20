import React, { useState } from "react";
import {
  Container,
  Content,
  DateText,
  LabelText,
  SkeletonView,
  ValueText,
} from "./style";
import { AnimatePresence } from "moti";

type PropsData = {
  id: number;
  label: string;
  value: string;
  date: string;
  type: number;
};

type PropsMovements = {
  data: PropsData;
};

export default function Movements({ data }: PropsMovements) {
  const [showValue, setShowValue] = useState<boolean>(false);

  return (
    <Container onPress={() => setShowValue(!showValue)}>
      <DateText>{data.date}</DateText>

      <Content>
        <LabelText>{data.label}</LabelText>

        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <ValueText
              expense={data.type !== 1}
              from={{ translateX: 100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 500 }}
            >
              R$ {data.type === 1 ? data.value : "-" + data.value}
            </ValueText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <SkeletonView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing" }}
            ></SkeletonView>
          </AnimatePresence>
        )}
      </Content>
    </Container>
  );
}
