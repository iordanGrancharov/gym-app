import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <Link to="https://github.com/iordanGrancharov/gym-app" target="_blank">
        <FontAwesomeIcon icon={faGithub} className={styles["icon"]} />
      </Link>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className={styles["icon"]} />
      </a>
      <Link
        to="https://www.linkedin.com/in/yordan-gruncharov-151815244"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className={styles["icon"]} />
      </Link>
    </div>
  );
};

export default Footer;
