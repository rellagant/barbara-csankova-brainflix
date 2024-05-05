import './App.scss';
import './styles/partials/_globals.scss';
import { Header } from './components/Component/Header.jsx';
import { useState } from 'react';
import videoDetails  from './data/video-details.json';
import videos from './data/videos.json'
import { Video } from './components/Component/Video.jsx'

// import { Avatar } from './components/Component/Avatar.jsx';
// import AvatarImage from './assets/images/Mohan-muruge.jpg';
  

function App() {

  const [videoIndex, setVideoIndex] = useState(0);
  // const handleVideoSelect = (videoIndex) => {
  //   setCurrentVideoIndex(videoIndex);
  // }
// console.log(video);
  return (
    <>
    <Header/>
    <Video
    // video={video}
    currentVideoIndex={[0]}
    // handleVideoSelect={handleVideoSelect}
    mainPoster={videoDetails[videoIndex].image}
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

