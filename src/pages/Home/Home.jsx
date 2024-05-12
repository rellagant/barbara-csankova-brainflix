import "./Home.scss";
import { convertTimeStamp } from "../../utils/convertTimestamp";
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
    const [hasFetchError, setHasFetchError] = useState(false);
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
          setHasFetchError(true);
        }
      }
      fetchVideos();
    }, [id])

    if (hasFetchError === true) {
      return <p>Sorry, Mario but your princess is in another castle 🍄🍄🍄 Please try again later.</p>
    }

    if (videos === null) {
      return <p>Loading⚛⚛⚛</p>;
    }

  return (
  
    <>
      <Video mainPoster={videoDetails.image} />

      <Article
        title={videoDetails.title}
        channel={videoDetails.channel}
        date={convertTimeStamp(videoDetails.timestamp)}
        views={videoDetails.views}
        likes={videoDetails.likes}
        description={videoDetails.description}
      />

      <Comments comments={videoDetails.comments} />

      <VideoNav
        videos={videos}
        key={videoDetails.id}
        id={videoDetails.id}
      />

    </>
  );
}
