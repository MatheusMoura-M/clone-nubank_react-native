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
import { HomeTesteScreenNavigationProp } from "src/@types";

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
  navigation: HomeTesteScreenNavigationProp;
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

  // Navigation
  const navigation = useNavigation<HomeTesteScreenNavigationProp>();

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
