import { collection, getDocs } from "firebase/firestore";
import { firebaseToken } from "../../hook/firebase";

export const getCertificados = async () => {
  try {
    const userCollectionRef = collection(firebaseToken(), "certificados");
    const querySnapshot = await getDocs(userCollectionRef);
    const result = querySnapshot.docs.map((doc) => doc.data());
    return result;
  } catch (error) {
    console.log(error.response);
  }
};
export const getStacks = async () => {
  try {
    const userCollectionRef = collection(firebaseToken(), "stacks");
    const querySnapshot = await getDocs(userCollectionRef);
    const result = querySnapshot.docs.map((doc) => doc.data());
    return result;
  } catch (error) {
    console.log(error.response);
  }
};

export const getTagButton = async () => {
  try {
    const userCollectionRef = collection(firebaseToken(), "buttonStack");
    const querySnapshot = await getDocs(userCollectionRef);
    const result = querySnapshot.docs.map((doc) => doc.data());
    return result;
  } catch (error) {
    console.log(error.response);
  }
};
export const getVideos = async () => {
  try {
    const userCollectionRef = collection(firebaseToken(), "videos");
    const querySnapshot = await getDocs(userCollectionRef);
    const result = querySnapshot.docs.map((doc) => doc.data());
    return result;
  } catch (error) {
    console.log(error.response);
  }
};
