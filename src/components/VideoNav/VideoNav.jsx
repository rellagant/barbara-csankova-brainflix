import "./VideoNav.scss";
import { Link } from "react-router-dom";

export function VideoNav({ videos, id }) {
  const handleVideoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="videos">
      <h3 className="videos__header">Next Videos</h3>
      {videos.map((video, index) => {
        if (video.id !== id) {
          return (
            <Link to={`/${video.id}`} key={index} onClick={handleVideoClick}>
              <div className="videos__container">
                <div className="videos__left">
                  <img
                    src={video.image}
                    alt="Next Video"
                    className="videos__video"
                  />
                </div>

                <div className="videos__right">
                  <h2 className="videos__title">{video.title}</h2>
                  <div className="videos__comment">{video.channel}</div>
                </div>
              </div>
            </Link>
          );
        }
        return null;
      })}
    </div>
  );
}
