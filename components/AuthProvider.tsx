import { createContext, ReactNode, useContext, useState } from "react";
import { Auth } from "../utils/Auth";

const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvoider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(() => Auth.isAuth());

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        login: () => {
          Auth.login();
          setIsAuth(true);
        },
        logout: () => {
          Auth.logout();
          setIsAuth(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
