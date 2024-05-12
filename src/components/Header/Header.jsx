import "./Header.scss";
import LogoImg from "../../assets/images/icons/BrianFlix-logo.svg";
import { Avatar } from "../Avatar/Avatar";
import UploadImg from "../../assets/images/icons/upload.svg";
import { Link } from "react-router-dom";
import AvatarImage from '../../assets/images/Mohan-muruge.jpg';


export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={LogoImg} alt="Brianflix Logo" />
          </Link>
        </div>

        <nav className="header__nav">
          <input
            className="header__search-input"
            type="text"
            placeholder="Search..."
          />
          
          <Link to="/upload">
          <button className="header__button" type="submit">
            <img
              className="header__button-icon"
              src={UploadImg}
              alt="Upload Icon"
            /> 
            <h3 className="header__button-text">UPLOAD</h3>
          </button>
          </Link>

          <Avatar src={AvatarImage} alt="Avatar Image" /> 
        </nav>
      </header>
    </>
  );
}

