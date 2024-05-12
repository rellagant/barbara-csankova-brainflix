import "./Home.scss";
import { convertTimeStamp } from "../../utils/convertTimestamp";
// import '../../styles/partials/_globals';
import { Video } from "../../components/Video/Video";
import { Article } from "../../components/Article/Article";
import { Comments } from "../../components/Comments/Comments";
import { VideoNav } from "../../components/VideoNav/VideoNav";
import { useEffect, useState } from "react";
import { BrainFlixApi, apiKey } from "../../classes/brainflixapi";
import { useParams } from "react-router-dom";

export function Home() {

  const [videos, setVideos] = useState([]);
    const [videoDetails, setVideoDetails] = useState({});
    // const [hasFetchError, setHasFetchError] = useState(false);
    const { id } = useParams();


    useEffect(() => {

      const fetchVideos = async () => {
        const getBrainFlixApi = new BrainFlixApi(apiKey);

        try {
          const response = await getBrainFlixApi.getVideos(); //list of videos (no details)
          setVideos(response.data);


          const ichibanVideoId = response.data[0].id
          const hotdog = await getBrainFlixApi.getVideoDetails(id || ichibanVideoId); //details of one single video

          setVideoDetails(hotdog.data);

        } catch(error) {
          console.error("not for you", error);
          // setHasFetchError(true);
        }
      }
      fetchVideos();
    }, [id])
  // const [videoIndex, setVideoIndex] = useState(0);
  // const handleVideoSelect = (transformIndex) => {
  //   setVideoIndex(transformIndex);
  // };

  return (
  
    <>
      <Video mainPoster={videoDetails.image} />

      {/* <Article
        title={videoDetails[videoIndex].title}
        channel={videoDetails[videoIndex].channel}
        date={convertTimeStamp(videoDetails[videoIndex].timestamp)}
        views={videoDetails[videoIndex].views}
        likes={videoDetails[videoIndex].likes}
        description={videoDetails[videoIndex].description}
      />

      <Comments comments={videoDetails[videoIndex].comments} /> */}

      <VideoNav
        videos={videos}
        // key={videoDetails[videoIndex].id}
        // id={videoDetails[videoIndex].id}
        // handleVideoSelect={handleVideoSelect}
      />

      {/* Everything except for header comes here from app.jsx and is replaced in app.jsx with the home route, plus the video player page stuff */}
    </>
  );
}
