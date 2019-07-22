import React, { Component } from "react";
import Profile from "./Profile";
import Comments from "./comments/Comments";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TrustedList from "./TrustedList";
import TrustNotification from "./trust-components/TrustNotification";
import Header from "../components/header/Header";
import Skills from "./Skill/skills";

class Layout extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#D6EAF9" }}>
        <Header />
        <Container>
          <Row>
            <Col>
              <Profile />

              <Skills />
            </Col>
            <Col sm={{ span: 7 }}>
              <strong>Comments:</strong>
              <Comments />
            </Col>
            <Col>
              <TrustNotification />
              <TrustedList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layout;
