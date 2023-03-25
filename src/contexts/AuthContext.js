import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseAuthentication";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const authFunction = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setPending(false);
    });
    return authFunction();
  }, []);

  console.log(user);
  const context = {
    user,
    pending,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
