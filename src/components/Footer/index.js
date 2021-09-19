import React from "react";
import { Envelope, Github, Instagram, Telegram } from "react-bootstrap-icons";
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
              “Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand.” – Martin
              Fowler
            </p>
          </div>
          <div className="col-md-6 col-sm-12 position-relative footer-center">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="footer-title">Phone</div>
                <a href="tel:+998 99 5323370">+998 99 5323370</a>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="footer-title">Email</div>
                <a href="mailto:jakhongir.urmonov@gmail.com">
                  jakhongir.urmonov@gmail.com
                </a>
              </div>
            </div>
            <MainMenu footer={true} />
          </div>
          <div className="col">
            <div className="footer-title">Social network</div>
            <div className="socials">
              <a href="https://www.instagram.com/jakhongir_urmonov/">
                <Instagram />
              </a>
              <a href="https://t.me/jahongir_97">
                <Telegram />
              </a>
              <a href="mailto:jakhongir.urmonov@gmail.com">
                <Envelope />
              </a>
              <a href="https://github.com/JakhongirUrmonov">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
