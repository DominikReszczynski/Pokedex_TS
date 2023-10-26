import { useState } from "react";
import { PostThumbs } from "./PostThumbs/PostThumbs";
import { data } from "./PostThumbs/data";

export interface PostInterface {
  thumbImg: string;
  title: string;
  content: string;
  topics1?: string;
  topics2?: string;
  topics3?: string;
}

export const Home = () => {
  const [posts] = useState<PostInterface[]>(data);
  return (
    <div className="site_conteiner ">
      {posts.length === 0 ? <p>Brak postów do wyświetlenia</p> : <PostThumbs />}
    </div>
  );
};
