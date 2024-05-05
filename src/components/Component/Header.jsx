import "./Header.scss";
import LogoImg from "../../assets/images/icons/BrainFlix-logo.svg";
import { Avatar } from "../../components/Component/Avatar";
import UploadImg from "../../assets/images/icons/upload.svg";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <a href="/">
            <img src={LogoImg} alt="Brainflix Logo" />
          </a>
        </div>

        <nav className="header__nav">
          <input
            className="header__search-input"
            type="text"
            placeholder="Search..."
          />

          <button className="header__button" type="submit">
            <img
              className="header__button-icon"
              src={UploadImg}
              alt="Upload Icon"
            />
            <h3 className="header__button-text">UPLOAD</h3>
          </button>

          <Avatar />
        </nav>
      </header>
    </>
  );
}

//logo
//searchbar - black search icon inside -- mohan beside that
//upload button -- white + sign inside -- non functional
