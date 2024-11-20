import { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthDataProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);
   const [emailForForgotPassword, setEmailForForgotPassword] = useState(null);

   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
   const urlRegex =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
   const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
   const phoneRegex = /^01\d{9}$/;
   const isValidEmail = (email) => emailRegex.test(email);
   const isValidPassword = (password) => passwordRegex.test(password);
   const isValidPhotoURL = (url) => urlRegex.test(url);
   const isValidName = (name) => nameRegex.test(name);
   const isValidPhone = (num) => phoneRegex.test(num);

   const registerWithEmail = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const signInWithEmail = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };
   const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };
   const updateUserProfile = (obj) => updateProfile(auth.currentUser, obj);
   const resetPassword = (email) => sendPasswordResetEmail(auth, email);
   const logOutUser = () => {
      setLoading(true);
      return signOut(auth);
   };

   // ------------ Auth Observer ----------
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => unSubscribe();
   }, []);

   const authData = {
      isValidEmail,
      isValidPassword,
      isValidPhotoURL,
      isValidName,
      isValidPhone,
      registerWithEmail,
      signInWithEmail,
      user,
      loading,
      signInWithGoogle,
      updateUserProfile,
      logOutUser,
      emailForForgotPassword,
      setEmailForForgotPassword,
      resetPassword,
   };
   return (
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
   );
};

export default AuthDataProvider;
