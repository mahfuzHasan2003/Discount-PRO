import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthContext = createContext();
const AuthDataProvider = () => {
   const signInWithEmail = (email, password) =>
      createUserWithEmailAndPassword(auth, email, password);
   const authData = {};
   return <AuthContext.Provider value={authData}></AuthContext.Provider>;
};

export default AuthDataProvider;
