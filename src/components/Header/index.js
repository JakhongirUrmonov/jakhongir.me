import React from "react";
import CustomButton from "../UI/CustomButton";
import headerImg from "../../assets/images/header-img.png";
import MainMenu from "../UI/MainMenu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img
        src={headerImg}
        alt="this is header of jakhongirs website"
        className="header-img"
      />
      <div className="container">
        <nav className="navbar navbar-expand-lg justify-content-between .align-items-center">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <Link
              className="navbar-brand d-none d-lg-inline-block navbar-brand"
              to="/"
            >
              Urmonov Jakhongir <br />
              <span>Web developer</span>
            </Link>
            <Link
              className="navbar-brand-two navbar-brand mx-auto d-lg-none d-inline-block"
              to="/"
            >
              Urmonov Jakhongir <br />
              <span>Web developer</span>
            </Link>
            <div className="w-100 text-right">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse d-flex" id="myNavbar">
            <MainMenu />
            <CustomButton text="Write me" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
