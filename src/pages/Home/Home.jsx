import "./Home.scss";
// import '../../styles/partials/_globals';
import videoDetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import { Video } from "../../components/Video/Video";
import { Article } from "../../components/Article/Article";
import { Comments } from "../../components/Comments/Comments";
import { VideoNav } from "../../components/VideoNav/VideoNav";
import { useState } from "react";


export const convertTimeStamp = (timestamp) => {
    console.log(timestamp);
    const date = new Date(timestamp);
    const dateFormat = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", dateFormat);
    const time = formattedDate.replace(/,/g, "");
    return time;
  };

export function Home() {
    const [videoIndex, setVideoIndex] = useState(0);
    const handleVideoSelect = (transformIndex) => {
      setVideoIndex(transformIndex);
    };
  

    return (
        <>
         <Video mainPoster={videoDetails[videoIndex].image} />
      <Article
        title={videoDetails[videoIndex].title}
        channel={videoDetails[videoIndex].channel}
        date={convertTimeStamp(videoDetails[videoIndex].timestamp)}
        views={videoDetails[videoIndex].views}
        likes={videoDetails[videoIndex].likes}
        description={videoDetails[videoIndex].description}
      />

      <Comments comments={videoDetails[videoIndex].comments} />

      <VideoNav
        videos={videos}
        key={videoDetails[videoIndex].id}
        id={videoDetails[videoIndex].id}
        handleVideoSelect={handleVideoSelect}
      />

     
        {/* Everything except for header comes here from app.jsx and is replaced in app.jsx with the home route, plus the video player page stuff */}
        </>
    )
}