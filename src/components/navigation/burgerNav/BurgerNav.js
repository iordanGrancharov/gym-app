import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./BurgerNav.css";

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
          className="burgerMenu"
          onClick={showBurgerMenu}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="burgerMenu"
          onClick={showBurgerMenu}
        />
      )}
      {/* hasUser */}
      <div className={classShown}>
        {hasUser ? (
          <ul className="links-burger">
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
          <ul className="links-burger">
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
