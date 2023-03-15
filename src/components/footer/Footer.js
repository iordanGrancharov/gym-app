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
      <p className={styles["text"]}>@Copyright 2023 - All rights reserved</p>
      <div className={styles["links-continer"]}>
        <Link to="https://github.com/iordanGrancharov/gym-app" target="_blank">
          <FontAwesomeIcon icon={faGithub} className={styles["icon"]} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/yordan-gruncharov-151815244"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles["icon"]} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
