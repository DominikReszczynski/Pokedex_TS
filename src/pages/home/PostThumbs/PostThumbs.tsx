import { data } from "./data";
import './PostThumbs.scss'

export const PostThumbs = () => {
  return (
    <div>
      {data.map((post, index) => {
        return (
          <div key={index} className="post__thumb--wrapper">
            <div className="thumb__img">
              <img src={post.thumbImg} alt="post thumb image" />
            </div>
            <div className="thumb__content--wrapper">
              <h1 className="thumb__title">{post.title}</h1>
              <hr />
              <p className="thumb__content">{post.content}</p>
              <div className="thumb__footer">
                <p>
                  <span>{post.topics1}</span>
                  <span>{post.topics2}</span>
                  <span>{post.topics3}</span>
                </p>
                <a href="#" className="post__link">
                  CZYTAJ DALEJ...
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
