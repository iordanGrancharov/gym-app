import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <a href="#">
        <FontAwesomeIcon icon={faGithub} className={styles["icon"]} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className={styles["icon"]} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} className={styles["icon"]} />
      </a>
    </div>
  );
};

export default Footer;
