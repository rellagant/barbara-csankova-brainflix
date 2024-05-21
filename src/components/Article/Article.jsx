import "./Article.scss";
import viewIcon from "../../assets/images/icons/views.svg";
import likeIcon from "../../assets/images/icons/likes.svg";

export function Article({ title, channel, date, views, likes, description }) {
  return (
    <>
      <div className="article-title-container">
        <h1 className="article_title">{title}</h1>
      </div>
      <section className="article">
        <div className="article__left">
          <div className="article_byline">{channel}</div>
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
      </section>
      <p className="article_paragraph">{description}</p>
    </>
  );
}
