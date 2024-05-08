import "./App.scss";
import "./styles/partials/_globals.scss";
import { Header } from "./components/Header/Header.jsx";
import { useState } from "react";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import { Video } from "./components/Video/Video.jsx";
import { Article } from "./components/Article/Article.jsx";
import { Comments } from "./components/Comments/Comments.jsx";
import { VideoNav } from "./components/VideoNav/VideoNav.jsx";

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

function App() {
  const [videoIndex, setVideoIndex] = useState(0);
  const handleVideoSelect = (transformIndex) => {
    setVideoIndex(transformIndex);
  };

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;

//redo foldering of components -- I didn't realize each component needed its own folder, sometimes I interpret things very literally
//Nohan component needs to be fixed in the next Sprint

