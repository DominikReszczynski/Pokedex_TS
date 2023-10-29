import { PostInterface } from "../home/home";

import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBPGwa76HPqg0qCKsOpwXYHj8I_O4TjE8c",
  authDomain: "pokedexts.firebaseapp.com",
  projectId: "pokedexts",
  storageBucket: "pokedexts.appspot.com",
  messagingSenderId: "188336105780",
  appId: "1:188336105780:web:727dd64a1eeb256408dd61",
  measurementId: "G-0Z31G9WHB7",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export interface ExtendedPostInterface extends PostInterface {
  subTitleMain: string;
  secondSubTitle?: string;
  secondSubTitleContent?: string;
}

const db = getFirestore(app);
const data: ExtendedPostInterface[] = [];
const querySnapshot = await getDocs(collection(db, "postData"));
querySnapshot.forEach((post) => {
  const postData = post.data();
  const fetchpost: ExtendedPostInterface = {
    thumbImg: postData.thumbImg,
    title: postData.title,
    subTitleMain: postData.subTitleMain,
    content: postData.content,
    secondSubTitle: postData.secondSubTitle,
    secondSubTitleContent: postData.secondSubTitleContent,
    topics1: postData.topics1,
    topics2: postData.topics2,
    topics3: postData.topics3,
  };
  data.push(fetchpost);
});

export const postData = data;
