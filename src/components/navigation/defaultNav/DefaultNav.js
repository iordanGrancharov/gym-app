import styles from "./DefaultNav.module.css";

const DefaultNav = ({ className, hasUser }) => {
  const userClass = hasUser ? "links links-user" : "links links-guest";
  return (
    <div className={className}>
      {hasUser ? (
        <ul className={`${styles["links"]} ${styles["links-user"]}`}>
          {/* USER */}
          <li>
            <a href="#">
              <span>Create Your Own</span>
            </a>
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
        <ul className={`${styles["links"]} ${styles["links-guest"]}`}>
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
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DefaultNav;
