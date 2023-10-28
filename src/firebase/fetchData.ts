import { app } from './firebaseConfig';
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { ExtendedPostInterface } from "../pages/posts/postData";


    const fetchPostData = async () => {
      try {
        const db = getFirestore(app)
        const data: { data: ExtendedPostInterface }[] = []
        const querySnapshot = await getDocs(collection(db, 'postData'))
        querySnapshot.forEach((post) => {
            
          data.push({ data: post.data() as ExtendedPostInterface })
          return data
        })                  
      }
      catch (error) {
        console.error('Error: ', error)
        return []
      }
    }     

export default fetchPostData