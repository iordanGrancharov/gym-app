import styles from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    rePassword: "",
    country: "",
  };
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

    if (values.password !== values.rePassword) {
      errors.rePassword = "Password don't match!";
    }

    if (!values.country) {
      errors.country = "Country is required!";
    } else if (values.country) {
      const firstLetter = values.country[0];
      if (firstLetter !== firstLetter.toUpperCase()) {
        errors.country = "Country name should start with a capital letter!";
      }
    }

    return errors;
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
              onChange={handleChange}
            />
          </div>
          <p className={styles["error"]}>{formErrors.password}</p>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faLock} className={styles["icon"]} />
            <input
              type="password"
              id="password"
              name="rePassword"
              placeholder="Confirm password"
              onChange={handleChange}
            />
          </div>
          <p className={styles["error"]}>{formErrors.rePassword}</p>
          <div className={styles["input-field"]}>
            <FontAwesomeIcon icon={faCity} className={styles["icon"]} />
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              onChange={handleChange}
            />
          </div>
          <p className={styles["error"]}>{formErrors.country}</p>
        </div>
        <input className={styles["btn-submit"]} type="submit" value="Sign In" />
        <p className={styles["p-signIn"]}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
