import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseAuthentication";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(auth?.currentUser);

  useEffect(() => {
    const authFunction = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return authFunction();
  }, []);

  const context = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
