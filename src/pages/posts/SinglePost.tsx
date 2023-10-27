import { useParams } from "react-router-dom";
import { postData } from "./postData";
import "./SinglePost.scss";

export const SinglePost = () => {
  const { index } = useParams();
  const postId = index ? Number(index) : 0;
  return (
    <>
      <main className="site_conteiner ">
        <div className="post__wrapper">
          <div className="post__main__img">
            <img src={postData[postId].thumbImg} alt="" />
          </div>
          <p className="post__title">{postData[postId].title}</p>
          <hr />
          <div className="post__content">
            <p className="paragraph__title">{postData[postId].subTitleMain}</p>
            <p>{postData[postId].content}</p>
            <p className="paragraph__title">
              {postData[postId].secondSubTitle}
            </p>
            <p>{postData[postId].secondSubTitleContent}</p>
          </div>
          <p className="post__footer">
            <span>{postData[postId].topics1}</span>
            <span>{postData[postId].topics2}</span>
            <span>{postData[postId].topics3}</span>
          </p>
        </div>
      </main>
    </>
  );
};
