import styles from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faImage,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["picture-container"]}>
        <h1>Be a part of our community</h1>
        <p>Sign up and make the first step to your new life.</p>
      </div>
      <form className={styles["form"]}>
        <h1>Sign Up</h1>
        <div className={styles["input-container"]}>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faLock} className={styles["icon"]} />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faLock} className={styles["icon"]} />
            <input
              type="password"
              id="password"
              name="rePassword"
              placeholder="Confirm password"
            />
          </div>

          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faImage} className={styles["icon"]} />
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="imageUrl"
            />
          </div>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faCity} className={styles["icon"]} />
            <input
              type="text"
              id="country"
              name="country"
              placeholder="City, Country"
            />
          </div>
        </div>
        <input className={styles["btn-submit"]} type="submit" value="Sign In" />
        <p className={styles["p-signIn"]}>
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
