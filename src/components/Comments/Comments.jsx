import "./Comments.scss";
import { Avatar } from "../Avatar/Avatar";
import CommentImg from "../../assets/images/icons/add_comment.svg";
import { convertTimeStamp } from "../../utils/convertTimestamp";

export function Comments({ comments }) {

  if (!comments) {
    return null;
  }

  return (
    <section className="comments">
      <div className="comments__count">{comments.length} comments</div>
      <div className="comments__box">

      <div className="comments__left">
      <Avatar />
      </div>

      <div className="comments__right">
      <form>
      <label htmlFor="comments__label">Join the Conversation</label>
      <div className="comments__form">
        <textarea
          className="comments__input"
          type="text"
          rows="4"
          placeholder="Add a new comment">
          </textarea> 

        <button className="comments__button" type="submit">
          <img
            className="comments__button-icon"
            src={CommentImg}
            alt="Comment Icon"/>
              Comment </button>
        </div>
        </form>
        </div>
      </div>

      {/* render comments */}

      <div className="comments__container">
        {comments.map((comment) => (
          <div key={comment.id}>
            <Avatar/>
            <div className="comment__details">
              <div className="comments__name">{comment.name}</div>
              <div className="comments__date">
                {convertTimeStamp(comment.timestamp)}
              </div>
              <div className="comments__comment"> {comment.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

