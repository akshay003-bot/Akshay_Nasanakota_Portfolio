import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/images/Akshay.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akshay-r-52723730b/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/akshay.nasanakota.1"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/akshaynasanakota/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;