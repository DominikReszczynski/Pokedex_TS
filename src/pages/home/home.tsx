import { useEffect, useState } from "react";
import { PostThumbs } from "./PostThumbs/PostThumbs";
import { app } from "../../firebase/firebaseConfig";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { postData } from "../posts/postData";
import './home.css'

export interface PostInterface {
  thumbImg: string;
  title: string;
  content: string;
  subTitleMain: string;
  secondSubTitle?: string;
  secondSubTitleContent?: string;
  topics1: string;
  topics2: string;
  topics3: string;
}

export const Home = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const db = getFirestore(app);
  const data: PostInterface[] = [];

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "postData"));
      querySnapshot.forEach((post) => {
        const postData = post.data();
        const fetchpost: PostInterface = {
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
      setPosts(postData);
    };

    getData();
  }, [posts]);



  return (
    <main className="site_conteiner ">
      {posts.length === 0 ? <p className="loader"></p> : <PostThumbs />}
    </main>
  );
};
