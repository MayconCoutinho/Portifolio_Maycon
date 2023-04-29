import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseToken = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDpOPVz1N4meehllSARGm4yHeOycZjWeEY",
    authDomain: "maycon-portifolio.firebaseapp.com",
    projectId: "maycon-portifolio",
    storageBucket: "maycon-portifolio.appspot.com",
    messagingSenderId: "786851526987",
    appId: "1:786851526987:web:d14c8f7cc0485a76df10ce",
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  return db;
};
