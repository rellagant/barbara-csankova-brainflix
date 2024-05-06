import './App.scss';
import './styles/partials/_globals.scss';
import { Header } from './components/Component/Header.jsx';
import { useState } from 'react';
import videoDetails  from './data/video-details.json';
import videos from './data/videos.json'
import { Video } from './components/Component/Video.jsx'
import { Article } from './components/Article/Article.jsx';
import { Comments } from './components/Comments/Comments.jsx';

// import { Avatar } from './components/Component/Avatar.jsx';
// import AvatarImage from './assets/images/Mohan-muruge.jpg';

export const convertTimeStamp = (timestamp) => {
  console.log(timestamp);
  const date = new Date(timestamp);
  const dateFormat = {
    // weekday: "short",
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
  // const handleVideoSelect = (videoIndex) => {
  //   setCurrentVideoIndex(videoIndex);
  // }

  return (
    <>
    <Header/>
    <Video
    // video={video}
    currentVideoIndex={[0]}
    // handleVideoSelect={handleVideoSelect}
    mainPoster={videoDetails[videoIndex].image}
    />
    <Article
    currentVideoIndex={[0]}
    title={videoDetails[videoIndex].title}
    channel={videoDetails[videoIndex].channel}
    date={convertTimeStamp(videoDetails[videoIndex].timestamp)}
    views={videoDetails[videoIndex].views}
    likes={videoDetails[videoIndex].likes}
    description={videoDetails[videoIndex].description}
    />

    <Comments
    currentVideoIndex={[0]}
    comments={videoDetails[videoIndex].comments}
    />

    {/* "HI JOSEPH, do you have a technicolor dreamcoat?"
    <Avatar src={AvatarImage} alt="User Avatar" /> 
    <Avatar/> */}
    </>
  );
}

export default App;


//go back to restyle header search border - left margin on brainflix logo
//go back to restyle mohan in avatar -- use the <> from under the header when you do
//rename video to BEM in video component
//redo foldering of components

