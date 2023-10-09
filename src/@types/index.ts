import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@routes/app.routes";
import { ReactNode } from "react";

export type ProviderProps = {
  children: ReactNode;
};

export type HomeTesteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "home" | "teste"
>;

export type HomeTesteScreenRouteProp = RouteProp<
  RootStackParamList,
  "home" | "teste"
>;
