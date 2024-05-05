import "./Comments.scss";
import { Avatar } from "../Component/Avatar";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";
import CommentImg from "../../assets/images/icons/add_comment.svg";

export function Comments() {
  return (
    <section className="comments">
      <div className="comments__count">3 comments</div>
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
    </section>
  );
}
