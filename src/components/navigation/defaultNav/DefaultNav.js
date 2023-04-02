import { useContext } from "react";

import styles from "./DefaultNav.module.css";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const DefaultNav = ({ className }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className={className}>
      {user ? (
        <ul className={`${styles["links"]} ${styles["links-user"]}`}>
          {/* USER */}
          <li>
            <Link to="/workout/create">Create Your Own</Link>
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
        <ul className={`${styles["links"]} ${styles["links-guest"]}`}>
          {/* GUEST */}
          <li>
            <Link to="/nutrition">Nutrition</Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DefaultNav;
