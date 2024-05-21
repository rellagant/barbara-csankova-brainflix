import "./UploadPage.scss";
import preview from "../../assets/images/Upload-video-preview.jpg";
import upIcon from "../../assets/images/icons/publish.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BrainFlixApi } from "../../classes/brainflixapi";

const api = new BrainFlixApi();

export function UploadPage() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    title: "",
    description: "",
    channel: "バーバラ　サンコバ",
    image: "http://localhost:8080/images/image9.jpg",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //validation
    if (!formData.title || !formData.description) {
      toast.error("Title and description are required");
      return;
    }

    try {
      await api.uploadVideo(formData);
      toast.success("Upload Successful!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Error uploading video.");
    }
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__container">
        <div className="upload__container-left">
          <label className="upload__label" htmlFor="upload__image">
            Video Thumbnail
          </label>
          <img src={preview} alt="Video Thumbnail" className="upload__image" />
        </div>

        <div className="upload__container-right">
          <form onSubmit={handleSubmit}>
            <div className="upload__container-top">
              <label htmlFor="video-title">Title Your Video</label>
              <input
                className="upload__form-field"
                type="text"
                id="upload__title-title"
                placeholder="Add a title to your video"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="upload__container-bottom">
              <label htmlFor="video-description">Add a Video Description</label>
              <textarea
                className="upload__text-field"
                name="description"
                id="upload__video-description"
                placeholder="Add a description to your video"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="upload__button-group">
              <button type="submit" className="upload__button-publish">
                <img
                  className="upload__button-icon"
                  src={upIcon}
                  alt="upload img"
                />
                <h3 className="upload__button-text">Publish</h3>
              </button>
              <ToastContainer />

              <button
                type="button"
                className="upload__button-cancel"
                onClick={() => navigate("/")}
              >
                <h3 className="upload__button-text">Cancel</h3>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
