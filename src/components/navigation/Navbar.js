import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { LinearProgress } from "@mui/material";
import Logo from "../Navigation/Logo/logo2.svg";

import BurgerNav from "./BurgerNav/BurgerNav";
import DefaultNav from "./DefaultNav/DefaultNav";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user, pending } = useAuth();

  return (
    <nav className={styles["navigation-bg"]}>
      <div className={styles["logo-container"]}>
        <Link to="/">
          <img className={styles["logo"]} src={Logo} alt="problem" />
        </Link>
        <label className={styles["logoText"]}>
          PAIN
          <br />
          <span className={styles["and"]}>AND</span>
          <br />
          <span className={styles["gain"]}>GAIN</span>
        </label>
      </div>

      {pending ? (
        <LinearProgress
          color="inherit"
          size={"4rem"}
          className={styles["loader"]}
        />
      ) : (
        <div className={styles["nav-container"]}>
          <DefaultNav className={styles["links-container"]} />
          <BurgerNav className={styles["burger"]} />
          {user && (
            <div className={styles["profile"]}>
              <Link to="/profile">
                <img
                  src="https://dfge.de/wp-content/uploads/blank-profile-picture-973460_640.png"
                  alt="SNIMKA BACE"
                />
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
