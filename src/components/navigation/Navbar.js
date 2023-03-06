import { Container, Row, Col } from "react-bootstrap";
import Logo from "../navigation/logo/logo2.svg";

import BurgerNav from "./burgerNav/BurgerNav";
import DefaultNav from "./defaultNav/DefaultNav";

import "./Navbar.css";

const Navbar = ({ hasUser }) => {
  return (
    <div className="navigation-bg">
      <Container>
        <Row xs={2} md={2} lg={2} className="mainRow justify-content center">
          <Col xs={2} md={2} lg={2}>
            <Col xs={6}>
              <a href="#">
                <img className="logo" src={Logo} alt="problem" />
              </a>
            </Col>
            <Col xs={6}>
              <label className="logoText">
                PAIN
                <br />
                <span className="and">AND</span>
                <br />
                <span className="gain">GAIN</span>
              </label>
            </Col>
          </Col>
          <Col xs="auto" className="nav-ul">
            <DefaultNav className="links-container" hasUser={hasUser} />
            <BurgerNav className="burger" hasUser={hasUser} />
            {hasUser && (
              <div className="profile">
                <a href="#">
                  <img
                    src="https://dfge.de/wp-content/uploads/blank-profile-picture-973460_640.png"
                    alt="SNIMKA BACE"
                  />
                </a>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
