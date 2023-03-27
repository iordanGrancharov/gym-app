import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseAuthentication";
import { onAuthStateChanged } from "firebase/auth";
import { signIn, signUp, logout, signInWithGoogle } from "../services/users";

import { getUserData } from "../firebase/firebaseFirestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const authFunction = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser !== null) {
        const userData = await getUserData(currentUser);
        console.log(userData);
        setUser(userData);
      } else {
        setUser(null);
      }

      setPending(false);
    });
    return authFunction;
  }, []);

  const context = {
    user,
    pending,
    signIn,
    signUp,
    logout,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
