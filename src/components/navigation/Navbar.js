import { Container, Row, Col } from "react-bootstrap";
import Logo from "../navigation/logo/logo2.svg";

import BurgerNav from "./burgerNav/BurgerNav";
import DefaultNav from "./defaultNav/DefaultNav";

import styles from "./Navbar.module.css";

const Navbar = ({ hasUser }) => {
  return (
    <nav className={styles["navigation-bg"]}>
      <Container>
        <Row xs={2} md={2} lg={2}>
          <Col xs={2} md={2} lg={2}>
            <Col xs={6}>
              <a href="#">
                <img className={styles["logo"]} src={Logo} alt="problem" />
              </a>
            </Col>
            <Col xs={6}>
              <label className={styles["logoText"]}>
                PAIN
                <br />
                <span className={styles["and"]}>AND</span>
                <br />
                <span className={styles["gain"]}>GAIN</span>
              </label>
            </Col>
          </Col>
          <Col xs="auto">
            <DefaultNav
              className={styles["links-container"]}
              hasUser={hasUser}
            />
            <BurgerNav className={styles["burger"]} hasUser={hasUser} />
            {hasUser && (
              <div className={styles["profile"]}>
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
    </nav>
  );
};

export default Navbar;
