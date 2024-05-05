import "./Article.scss";
import viewIcon from "../../assets/images/icons/views.svg";
import likeIcon from "../../assets/images/icons/likes.svg";

export function Article({ title, channel, date, views, likes, description }) {
  return (
    <>
      <h1 className="article__title">{title}</h1>
      <article className="article">
        <div className="article__left">
          <div className="article__byline">{channel}</div>
          <div className="article__date">{date}</div>
        </div>

        <div className="article__right">
          <div className="article__views">
            <img src={viewIcon} alt="Views Icon" />
            {views}
          </div>

          <div className="article__likes">
            <img src={likeIcon} alt="Likes Icon" />
            {likes}
          </div>
        </div>
      </article>
      <p className="article__paragraph">{description}</p>
    </>
  );
}
