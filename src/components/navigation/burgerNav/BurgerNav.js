import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./BurgerNav.module.css";

const BurgerNav = ({ className, hasUser }) => {
  const [isShown, setIsShown] = useState(false);

  const showBurgerMenu = (e) => {
    setIsShown(!isShown);
  };

  const classShown =
    isShown === true ? "burger-container-show" : "burger-container-hide";

  return (
    <div className={className}>
      {isShown === true ? (
        <FontAwesomeIcon
          icon={faClose}
          className={styles["burgerMenu"]}
          onClick={showBurgerMenu}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={styles["burgerMenu"]}
          onClick={showBurgerMenu}
        />
      )}
      {/* hasUser */}
      <div className={styles[classShown]}>
        {hasUser ? (
          <ul className={`${styles["links-burger"]} ${styles["hasUser"]}`}>
            {/* USER */}
            <li>
              <Link to="/create">Create Your Own</Link>
            </li>
            <li>
              <Link to="/nutrition">Nutrition</Link>
            </li>
            <li>
              <Link to="/workouts">Workouts</Link>
            </li>
            <li>
              <Link to="/logout">LogOut</Link>
            </li>
          </ul>
        ) : (
          <ul className={`${styles["links-burger"]} ${styles["hasGuest"]}`}>
            {/* GUEST */}
            <li>
              <Link to="/nutrition">Nutrition</Link>
            </li>
            <li>
              <Link to="/workouts">Workouts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default BurgerNav;
