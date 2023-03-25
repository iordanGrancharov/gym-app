import styles from "./DefaultNav.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const DefaultNav = ({ className }) => {
  const { user } = useAuth();
  return (
    <div className={className}>
      {user ? (
        <ul className={`${styles["links"]} ${styles["links-user"]}`}>
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
        <ul className={`${styles["links"]} ${styles["links-guest"]}`}>
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
  );
};

export default DefaultNav;
