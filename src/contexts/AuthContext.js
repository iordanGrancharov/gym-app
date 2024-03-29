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
  const [userAuthRef, setUserAuthRef] = useState(null);

  useEffect(() => {
    const authFunction = onAuthStateChanged(auth, async (currentUser) => {
      setPending(true);
      if (currentUser) {
        try {
          await createUser(currentUser);
          setUserAuthRef(currentUser);
        } catch (e) {
          console.log(e.message);
        }
      }
      if (currentUser !== null) {
        try {
          const data = await getUser(currentUser);
          setUser(data);
        } catch (e) {
          console.log(e.message);
        }
      } else {
        setUser(null);
      }

      setPending(false);
    });
    return authFunction;
  }, []);

  const context = {
    userAuthRef,
    user,
    setUser,
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
