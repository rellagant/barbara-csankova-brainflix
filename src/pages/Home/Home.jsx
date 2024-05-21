import "./Home.scss";
import { convertTimeStamp } from "../../utils/convertTimestamp";
import { Video } from "../../components/Video/Video";
import { Article } from "../../components/Article/Article";
import { Comments } from "../../components/Comments/Comments";
import { VideoNav } from "../../components/VideoNav/VideoNav";
import { useEffect, useState } from "react";
import { BrainFlixApi } from "../../classes/brainflixapi";
import { useParams } from "react-router-dom";

export function Home() {
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});
  const [hasFetchError, setHasFetchError] = useState(false);
  const { id } = useParams();

  const getBrainFlixApi = new BrainFlixApi();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getBrainFlixApi.getVideos(); //list of videos (no details)
        setVideos(response.data);
      } catch (error) {
        console.error("Could not retrieve", error.response.data);
        setHasFetchError(true);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        if (videos.length > 0) {
          const firstVideoId = videos[0].id;
          const response = await getBrainFlixApi.getVideoDetails(
            id || firstVideoId
          ); //single video within object within array etc.
          setVideoDetails(response.data);
        }
      } catch (error) {
        console.error("Could not retrieve video details", error.response.data);
        setHasFetchError(true);
      }
    };
    fetchVideoDetails();
  }, [videos[0], id]);

  if (hasFetchError === true) {
    return (
      <p>
        Sorry, Mario but your princess is in another castle 🍄🍄🍄 Please try
        again later.
      </p>
    );
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

      <VideoNav videos={videos} key={videoDetails.id} id={videoDetails.id} />
    </>
  );
}
