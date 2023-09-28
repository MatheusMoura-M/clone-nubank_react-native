import styled from "styled-components/native";

export type DirectionVariant = "column" | "row";

type ActionProps = {
  marginRight: number;
};

type AreaButtonProps = {
  flexDirection?: DirectionVariant;
};

type BarcodeProps = {
  width?: number;
};

type LabelButtonProps = {
  marginRight?: number;
  marginLeft?: number;
};

export const Container = styled.ScrollView`
  flex: 1;
  max-height: 125px;
  padding-top: 8px;
  padding-left: 27px;
  padding-right: 22px;
  /* background-color: #ecf0f1; */
`;

export const ActionButton = styled.TouchableOpacity<ActionProps>`
  align-items: center;
  margin-right: ${({ marginRight }) => marginRight}px;
  position: relative;
`;

export const AreaButton = styled.View<AreaButtonProps>`
  background-color: #ecf0f1;
  width: 71px;
  height: 71px;
  border-radius: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
`;

export const LabelButton = styled.Text<LabelButtonProps>`
  margin-top: 9px;
  margin-top: 9px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
`;

export const LabelButtonRecharge = styled.Text`
  position: absolute;
  min-width: 78px;
  bottom: 3px;
  margin-top: 9px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
`;

// ICON BARCODE
export const BoxBarCode = styled.View<BarcodeProps>`
  width: ${({ width }) => (width ? width : 4)}px;
  height: 9px;
  background-color: black;
  margin-right: 1.5px;
`;

// ICON TRANSFERÊNCIA
export const BoxTransfer = styled.View`
  width: 23px;
  height: 14px;
  align-items: center;
  justify-content: center;
  border-color: black;
  border-width: 2px;
`;

export const IconTransfer = styled.View`
  height: 6.5px;
  width: 6.5px;
  border-color: black;
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

// ICON PHONE
export const BoxPhone = styled.View`
  width: 14.5px;
  height: 22.5px;
  align-items: center;
  justify-content: flex-end;
  border-color: black;
  border-width: 2px;
  border-radius: 4px;
`;

export const HorizontalLinePhone = styled.View`
  height: 2px;
  width: 4px;
  background-color: black;
  margin-bottom: 2px;
`;

// ICON CADEADO
export const BoxPadlock = styled.View`
  height: 15px;
  align-items: center;
  justify-content: center;
  padding-left: 1px;
`;

export const IconWrapperPadlock = styled.View`
  height: 10.8px;
  overflow: hidden;
`;

export const IconContainerPadlock = styled.View`
  height: 20px;
  width: 15px;
  border-color: black;
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const HorizontalLinePadlock = styled.View`
  width: 20px;
  border-color: black;
  border-bottom-width: 2px;
`;

export const BottomRectanglePadlock = styled.View`
  height: 9px;
  width: 18px;
  border-color: black;
  border-width: 2px;
  border-top-width: 0;
  background-color: #ecf0f1;
`;
