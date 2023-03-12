import styles from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

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
        </div>
        {/* <div className={styles["additional"]}>
          <div className={styles["checkbox"]}>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <input className={styles["btn-submit"]} type="submit" value="Sign In" />
        <p className={styles["new-here"]}>
          New here? <a href="#">Create an Account</a>
        </p> */}
      </form>
    </div>
  );
};

export default Register;
