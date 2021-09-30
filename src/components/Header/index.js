import React from "react";
import CustomButton from "../UI/CustomButton";
import headerImg from "../../assets/images/header-img.webp";
import MainMenu from "../UI/MainMenu";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <header>
      <img
        src={headerImg}
        alt="this is header of jakhongirs website"
        className="header-img"
      />
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link
            className="navbar-brand d-none d-lg-inline-block navbar-brand"
            to="/"
          >
            Urmonov Jakhongir <br />
            <span>Web developer</span>
          </Link>
          <Link
            className="navbar-brand-two navbar-brand d-lg-none d-inline-block"
            to="/"
          >
            Urmonov Jakhongir <br />
            <span>Web developer</span>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <MainMenu />
            <CustomButton mail={true} text="Contact me" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
