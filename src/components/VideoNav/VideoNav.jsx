import "./VideoNav.scss";

export function VideoNav({ videos, id, handleVideoSelect }) {
 
  return (
  
    <div className="videos">
        <h3 className="videos__header">Next Videos</h3>
      {videos.map((video, index) => {
        if (video.id !== id) {
          return (
            <div key={index} onClick={() => handleVideoSelect(index)} className="videos__container">
              <div className="videos__left">
              <img src={video.image} alt="Next Video" className="videos__video" />
              </div>

              <div className="videos__right">
              <h2 className="videos__title">{video.title}</h2>
              <div className="videos__comment">{video.channel}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

// don't need a return
