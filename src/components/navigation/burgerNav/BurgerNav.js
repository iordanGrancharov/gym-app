import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./BurgerNav.css";

const BurgerNav = (props) => {
  const [isShown, setIsShown] = useState("false");

  const showBurgerMenu = (e) => {};

  return (
    <div className={props.className}>
      <FontAwesomeIcon
        icon={faBars}
        className="burgerMenu"
        onClick={(e) => showBurgerMenu}
      />
      <div
        className={isShown ? "burger-container show" : "burger-container hide"}
      >
        <ul className="links-burger">
          {/* USER */}
          {/* <li>
                <a href="#">Custom Workout</a> 
              </li> */}
          {/* <li>
                <a href="#">Custom Foods plan</a>
              </li> */}
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
          {/* <li>
                <a href="#">LogOut</a> 
              </li> */}
          <li>
            <a href="#">About</a> {/* /exercises */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerNav;
