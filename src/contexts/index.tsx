import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "src/@types";

type AuthContextProps = {
  visibleValues: boolean;
  setVisibleValues: Dispatch<SetStateAction<boolean>>;
  isPressedEye: boolean;
  setIsPressedEye: Dispatch<SetStateAction<boolean>>;
  isPressedHelp: boolean;
  setIsPressedHelp: Dispatch<SetStateAction<boolean>>;
  isPressedInvite: boolean;
  setIsPressedInvite: Dispatch<SetStateAction<boolean>>;
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
  currentInvoice: boolean;
  setCurrentInvoice: Dispatch<SetStateAction<boolean>>;
  handlePickImage: () => Promise<null>;
  navigation: ScreenNavigationProp;
  homePageActivated: boolean;
  setHomePageActivated: Dispatch<SetStateAction<boolean>>;
  moneyPageActivated: boolean;
  setMoneyPageActivated: Dispatch<SetStateAction<boolean>>;
  shoppingPageActivated: boolean;
  setShoppingPageActivated: Dispatch<SetStateAction<boolean>>;
  handleButtonHomePage: (toBrowse?: boolean) => void;
  handleButtonMoneyPage: () => void;
  handleButtonShoppingPage: () => void;
  visibleComponent: boolean;
  setVisibleComponent: Dispatch<SetStateAction<boolean>>;
};

export type ProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [visibleValues, setVisibleValues] = useState<boolean>(false);
  const [isPressedEye, setIsPressedEye] = useState<boolean>(false);
  const [isPressedHelp, setIsPressedHelp] = useState<boolean>(false);
  const [isPressedInvite, setIsPressedInvite] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentInvoice, setCurrentInvoice] = useState<boolean>(true);

  const [homePageActivated, setHomePageActivated] = useState<boolean>(true);
  const [moneyPageActivated, setMoneyPageActivated] = useState<boolean>(false);
  const [shoppingPageActivated, setShoppingPageActivated] =
    useState<boolean>(false);

  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);

  // Navigation
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleButtonHomePage = (toBrowse: boolean = true) => {
    setMoneyPageActivated(false);
    setShoppingPageActivated(false);
    setHomePageActivated(true);

    setVisibleComponent(true);

    toBrowse && navigation.navigate("home");
  };

  const handleButtonMoneyPage = () => {
    setHomePageActivated(false);
    setShoppingPageActivated(false);
    setMoneyPageActivated(true);

    navigation.navigate("investments");
    setVisibleComponent(true);
  };

  const handleButtonShoppingPage = () => {
    setHomePageActivated(false);
    setMoneyPageActivated(false);
    setShoppingPageActivated(true);

    navigation.navigate("shopping");
    setVisibleComponent(true);
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }

    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        visibleValues,
        setVisibleValues,
        isPressedEye,
        setIsPressedEye,
        isPressedHelp,
        setIsPressedHelp,
        isPressedInvite,
        setIsPressedInvite,
        selectedImage,
        setSelectedImage,
        currentInvoice,
        setCurrentInvoice,
        handlePickImage,
        navigation,
        handleButtonHomePage,
        handleButtonMoneyPage,
        handleButtonShoppingPage,
        homePageActivated,
        setHomePageActivated,
        moneyPageActivated,
        setMoneyPageActivated,
        shoppingPageActivated,
        setShoppingPageActivated,
        setVisibleComponent,
        visibleComponent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
