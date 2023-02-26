import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
    </div>
  );
};

export default Footer;
