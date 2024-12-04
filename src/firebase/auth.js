import { auth } from "@react-native-firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "@react-native-firebase/auth";
import { db } from "@react-native-firebase/firestore";
import { addDoc, collection } from "@react-native-firebase/firestore";




export const doCreateUserWithEmailAndPassword = async (email, password) => {
  const user = {"email":email, 'password': password,'list_of_applied':[]}
  addDoc(collection(db,"users"),user)
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).catch(() => {alert(
    "Details not recognised. Please refresh the page and ensure you're  using the correct details. If you are a new user, please go to the registration page")});
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  addDoc(collection(db,"users"),user)
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
