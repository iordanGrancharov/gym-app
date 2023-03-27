import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
//doc instance of document
// getDoc, setDoc - using data of documents

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocumentRef = doc(db, "users", userAuth.user.uid);

  const userData = await getDoc(userDocumentRef);

  if (!userData.exists()) {
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentRef, {
        email,
        createdAt,
        personalInfo: {
          displayName: displayName ? displayName : "defaultUserName",
          avatar:
            "https://dfge.de/wp-content/uploads/blank-profile-picture-973460_640.png",
          workouts: [],
          nutrition: [],
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
    const userDocumentRef = doc(db, "users", userAuth?.user?.uid);
    const userData = await getDoc(userDocumentRef);

    return userData;
  } catch (e) {
    console.log(e.message);
  }
};
