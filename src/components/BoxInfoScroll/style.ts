import styled from "styled-components/native";
import { MarginProps } from "@screens/Home/style";

export const Container = styled.ScrollView`
  height: 122px;
  max-height: 122px;
  padding-top: 8px;
  padding-left: 25px;
  padding-right: 22px;
  margin-top: 16px;
  flex-direction: row;
  overflow: scroll;
  border-bottom-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
