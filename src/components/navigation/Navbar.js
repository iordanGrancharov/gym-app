import { Container, Row, Col } from "react-bootstrap";
import Logo from "../navigation/logo/logo2.svg";

import BurgerNav from "./burgerNav/BurgerNav";
import DefaultNav from "./defaultNav/DefaultNav";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navigation-bg">
      <Container>
        <Row xs={2} md={2} lg={2} className="mainRow justify-content center">
          <Col xs={2} md={2} lg={2}>
            <Col xs={6}>
              <a href="#">
                <img className="logo" src={Logo} alt="ne stana" />
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
          <Col xs="auto">
            <DefaultNav className="links-container" />
            <BurgerNav className="burger" />
          </Col>
          {/* <Col>
            <h1>asddas</h1>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
