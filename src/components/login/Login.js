import { useState, useEffect, useContext } from "react";

import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import { validate } from "../../utils/form-validation";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        signIn(formValues.email, formValues.password).then(() => navigate("/"));
      } catch (e) {
        navigate("/404");
      }
    }
  }, [formErrors, isSubmit, formValues, signIn, navigate]);

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      navigate("/404");
    }
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["picture-container"]}>
        <h1>Welcome Back!</h1>
        <p>You can sign in to access with your existing account.</p>
      </div>
      <form className={styles["form"]} onSubmit={handleSubmit} noValidate>
        <h1>Sign In</h1>
        <div className={styles["input-container"]}>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formValues.email}
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
              onChange={handleChange}
              value={formValues.password}
            />
          </div>
          <p className={styles["error"]}>{formErrors.password}</p>
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
        <p className={styles["new-here"]}>
          New here? <Link to="/register">Create an Account</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
