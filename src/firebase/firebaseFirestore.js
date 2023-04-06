import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getDate } from "../utils/getDate";
//doc instance of document
// getDoc, setDoc - using data of documents

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocumentRef = doc(db, "users", userAuth.uid);

  const userData = await getDoc(userDocumentRef);

  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = getDate();

    try {
      await setDoc(userDocumentRef, {
        _id: userAuth.uid,
        email,
        createdAt,
        personalInfo: {
          username: displayName ? displayName : "defaultUserName",
          age: "",
          avatar:
            "https://dfge.de/wp-content/uploads/blank-profile-picture-973460_640.png",
          weight: "",
          height: "",
          experience: "",
          gymType: "",
        },
      });
    } catch (e) {
      console.log("error creating the user", e.message);
    }
  }

  return userDocumentRef;
};

export const getUserData = async (userAuth) => {
  try {
    const userDocumentRef = doc(db, "users", userAuth.uid);
    const userData = await getDoc(userDocumentRef);
    return userData.data();
  } catch (e) {
    console.log(e.message);
  }
};
