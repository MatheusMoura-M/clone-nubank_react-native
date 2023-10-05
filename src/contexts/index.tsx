import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AuthContextProps = {
  visibleValues: boolean;
  setVisibleValues: Dispatch<SetStateAction<boolean>>;
  isPressedEye: boolean;
  setIsPressedEye: Dispatch<SetStateAction<boolean>>;
};

export type ProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [visibleValues, setVisibleValues] = useState<boolean>(false);
  const [isPressedEye, setIsPressedEye] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{ visibleValues, setVisibleValues, isPressedEye, setIsPressedEye }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
