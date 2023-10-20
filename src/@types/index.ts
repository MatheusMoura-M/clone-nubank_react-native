import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@routes/index.routes";
import { ReactNode } from "react";

export type ProviderProps = {
  children: ReactNode;
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "home" | "account" | "investments" | "shopping"
>;

export type ScreenRouteProp = RouteProp<
  RootStackParamList,
  "home" | "account" | "investments" | "shopping"
>;
