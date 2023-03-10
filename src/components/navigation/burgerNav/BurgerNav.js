import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./BurgerNav.module.css";

const BurgerNav = ({ className, hasUser }) => {
  const [isShown, setIsShown] = useState(false);

  const showBurgerMenu = (e) => {
    setIsShown(!isShown);
  };

  const classShown =
    isShown == true ? "burger-container-show" : "burger-container-hide";

  return (
    <div className={className}>
      {isShown == true ? (
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
              <a href="#">Create Your Own</a>
            </li>
            <li>
              <a href="#">Nutrition</a>
            </li>
            <li>
              <a href="#">Workouts</a>
            </li>
            <li>
              <a href="#">LogOut</a>
            </li>
          </ul>
        ) : (
          <ul className={`${styles["links-burger"]} ${styles["hasGuest"]}`}>
            {/* GUEST */}
            <li>
              <a href="#">Nutrition</a>
            </li>
            <li>
              <a href="#">Workouts</a>
            </li>
            <li>
              <a href="#">Login</a> {/* /exercises */}
            </li>
            <li>
              <a href="#">Register</a> {/* /exercises */}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default BurgerNav;
