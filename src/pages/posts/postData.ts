import { PostInterface } from "../home/home";
import { app } from "../../firebase/firebaseConfig";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(app);
const data: PostInterface[] = [];

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
    }
  
    getData()

export const postData = data;
