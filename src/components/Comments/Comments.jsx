import "./Comments.scss";
import { Avatar } from "../Avatar/Avatar";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";
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
      <Avatar src={AvatarImage} alt="User Avatar" />
     
      <form>
      <label htmlFor="comments__label">Join the Conversation</label>
      <div className="comments__form">
        <input
          className="comments__input"
          type="text"
          placeholder="Add a new comment"
        />   

        <button className="comments__button" type="submit">
          <img
            className="comments__button-icon"
            src={CommentImg}
            alt="Comment Icon"
          />
          <h3 className="comments__button-text">Comment</h3>
        </button>
        </div>
        </form>
      </div>

      {/* render comments */}

      <div className="comments__container">
        {comments.map((comment) => (
          <div key={comment.id}>
            <Avatar src={null} alt="Nohan" />
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

