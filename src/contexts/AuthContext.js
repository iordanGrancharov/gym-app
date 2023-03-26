import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseAuthentication";
import { onAuthStateChanged } from "firebase/auth";
import { signIn, signUp, logout, signInWithGoogle } from "../services/users";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const authFunction = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        setUser(currentUser);
      } else {
        setUser(null);
      }

      console.log(currentUser);
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
