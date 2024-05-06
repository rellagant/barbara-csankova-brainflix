import "./Comments.scss";
import { Avatar } from "../Component/Avatar";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";
import CommentImg from "../../assets/images/icons/add_comment.svg";
import { convertTimeStamp } from "../../App";

export function Comments({ comments }) {
  return (
    <section className="comments">
      <div className="comments__count">3 comments</div>
      <div className="comments__box">
      <Avatar src={AvatarImage} alt="User Avatar" />
     
      
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
      </div>

      {/* render comments */}

      <div className="comments__container">
        {comments.map((comment, index) => (
          <div key={index}>
            <Avatar src="false" alt="Nohan" />
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

//what do i need from JSON? name, comment, timestamp
