import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseAuthentication";
import { onAuthStateChanged } from "firebase/auth";
import {
  signIn,
  signUp,
  logout,
  signInWithGoogle,
  createUser,
  getUser,
} from "../services/users";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const authFunction = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        createUser(currentUser);
      }
      if (currentUser !== null) {
        getUser(currentUser)
          .then((data) => setUser(data))
          .catch((e) => console.log(e.message));
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
