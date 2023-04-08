import { useState, useEffect, useContext } from "react";

import styles from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import { validate } from "../../utils/form-validation";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { signUp, signInWithGoogle, user } = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: "",
    rePassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    setIsSubmit(true);
  };

  useEffect(() => {
    async function register() {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        try {
          await signUp(formValues.email, formValues.password);
          navigate(`/`);
        } catch (e) {
          navigate("/error");
        }
      }
    }
    register();
  }, [user, formErrors, isSubmit, formValues, signUp, navigate]);

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(`/`);
    } catch (error) {
      const message = error.message
        .split("(")[1]
        .substring(0, error.message.split("(")[1].length - 2);

      if (
        message !== "auth/popup-closed-by-user" &&
        message !== "cancelled-popup-request"
      ) {
        navigate("/error");
      }
    }
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["picture-container"]}>
        <h1>Be a part of our community</h1>
        <p>Sign up and make the first step to your new life.</p>
      </div>
      <form className={styles["form"]} onSubmit={handleSubmit} noValidate>
        <h1>Sign Up</h1>
        <div className={styles["input-container"]}>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className={styles["error"]}>{formErrors.email}</p>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faLock} className={styles["icon"]} />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className={styles["error"]}>{formErrors.password}</p>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faLock} className={styles["icon"]} />
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              placeholder="Confirm password"
              value={formValues.rePassword}
              onChange={handleChange}
            />
          </div>
          <p className={styles["error"]}>{formErrors.rePassword}</p>
        </div>
        <input className={styles["btn-submit"]} type="submit" value="Sign In" />
        <div className={styles["google-auth"]}>
          <FontAwesomeIcon
            id="google-icon"
            icon={faGoogle}
            className={styles["icon"]}
          />
          <input
            className={styles["google-submit"]}
            type="button"
            value="Google Sign In"
            onClick={googleSignIn}
          />
        </div>
        <p className={styles["p-signIn"]}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
