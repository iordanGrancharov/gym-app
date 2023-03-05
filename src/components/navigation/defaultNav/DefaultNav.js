import "./DefaultNav.css";

const DefaultNav = (props) => {
  return (
    <div className={props.className}>
      <ul className="links">
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
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
        {/* <li>
                <a href="#">LogOut</a> 
              </li> */}
      </ul>
    </div>
  );
};

export default DefaultNav;
