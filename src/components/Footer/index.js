import React from "react";
import MainMenu from "../UI/MainMenu";

function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Urmonov Jakhongir</h2>
            <span>Web developer</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard
            </p>
            <p>Copyright © 2021</p>
          </div>
          <div className="col-md-6 position-relative footer-center">
            <div className="d-flex">
              <div className="col">
                <div className="footer-title">Phone</div>
                <span>+998 99 5323370</span>
              </div>
              <div className="col">
                <div className="footer-title">Email</div>
                <span>jakhongir.urmonov@gmail.com</span>
              </div>
            </div>
            <MainMenu footer={true} />
          </div>
          <div className="col">
            <div className="footer-title">Phone</div>
            <div className="socials"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
