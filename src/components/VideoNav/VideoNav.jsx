import "./VideoNav.scss";

export function VideoNav({ videos, id, handleVideoSelect }) {
  console.log(videos);
  return (
    <div>
      {videos.map((video, index) => {
        if (video.id !== id) {
          return (
            <div key={index} onClick={() => handleVideoSelect(index)}>
              <img src={video.image} alt="" />
              <h2>{video.title}</h2>
              <div>{video.channel}</div>
            </div>
          );
        }
      })}
    </div>
  );
}


