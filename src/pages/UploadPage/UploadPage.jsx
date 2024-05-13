import "./UploadPage.scss";
import preview from "../../assets/images/Upload-video-preview.jpg";
import upIcon from "../../assets/images/icons/publish.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export function UploadPage() {
  const navigate = useNavigate();
  const notify = (event) => {
    event.preventDefault();
    toast.success("Brian says thanks for submitting");
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__container">
          <div className="upload__container-left">
            <label className="upload__label">Video Thumbnail</label>
            <img src={preview} alt="" className="upload__image" />
          </div>

          <div className="upload__container-right">
            <form onSubmit={notify}>
              <div className="upload__container-top">
                <label htmlFor="video-title">Title Your Video</label>
                <input
                  className="upload__form-field"
                  type="text"
                  id="upload__title-title"
                  placeholder="Add a title to your video"
                  name="video-title"
                />
              </div>

              <div className="upload__container-bottom">
                <label htmlFor="video-description">
                  Add a Video Description
                </label>
                <textarea
                  className="upload__text-field"
                  name="video-description"
                  id="upload__video-description"
                  placeholder="Add a description to your video"></textarea>
              </div>

              <div className="upload__button-group">
                <button className="upload__button-publish">
                  <img
                    className="upload__button-icon"
                    src={upIcon}
                    alt="upload img"
                  />
                  <h3 className="upload__button-text">Publish</h3>
                </button>
                <ToastContainer />

                <button className="upload__button-cancel">
                  <h3 className="upload__button-text">Cancel</h3>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
