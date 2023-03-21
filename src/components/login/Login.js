import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Login = () => {
  const initialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(formValues);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formErrors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      /*Submit the form*/
      // setFormValues(initialValues);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 5) {
      errors.password = "Password should be at least 5 characters long!";
    }

    return errors;
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
        <p className={styles["new-here"]}>
          New here? <Link to="/register">Create an Account</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
