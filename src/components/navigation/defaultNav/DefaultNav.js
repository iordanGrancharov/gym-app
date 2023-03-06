import "./DefaultNav.css";

const DefaultNav = (props) => {
  const hasUser = props.hasUser ? "links links-user" : "links";
  return (
    <div className={props.className}>
      {props.hasUser ? (
        <ul className={hasUser}>
          {/* USER */}
          <li>
            <a href="#">Custom Workout</a>
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
        <ul className={hasUser}>
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
