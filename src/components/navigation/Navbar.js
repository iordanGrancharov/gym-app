import { Link } from "react-router-dom";

import Logo from "../Navigation/Logo/logo2.svg";

import BurgerNav from "./BurgerNav/BurgerNav";
import DefaultNav from "./DefaultNav/DefaultNav";

import styles from "./Navbar.module.css";

const Navbar = ({ hasUser }) => {
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

      <div className={styles["nav-container"]}>
        <DefaultNav className={styles["links-container"]} hasUser={hasUser} />
        <BurgerNav className={styles["burger"]} hasUser={hasUser} />
        {hasUser && (
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
    </nav>
  );
};

export default Navbar;
