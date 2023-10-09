import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@routes/index.routes";
import { ReactNode } from "react";

export type ProviderProps = {
  children: ReactNode;
};

export type HomeAccountScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "home" | "account"
>;

export type HomeAccountScreenRouteProp = RouteProp<
  RootStackParamList,
  "home" | "account"
>;
