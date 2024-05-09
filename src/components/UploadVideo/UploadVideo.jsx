import "./UploadVideo.scss";
import preview from "../../assets/images/Upload-video-preview.jpg";

export function UploadVideo() {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <label classname="upload__label">Video Thumbnail</label>
      <img src={preview} alt="" className="upload__image" />

      <form>
        <div>
          <label htmlFor="video-title">Title Your Video</label>
          <input
            type="text"
            id="upload__title-title"
            placeholder="Add a title to your video"
          />
        </div>

        <div>
          <label htmlFor="video-description">Add a Video Description</label>
          <textarea
            id="upload__video-description"
            placeholder="Add a description to your video"></textarea>
        </div>

        <div className="upload__button-group">
          <button type="submit">Publish</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </section>
  );
}
