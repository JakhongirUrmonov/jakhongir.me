import React from "react";
import {
  Envelope,
  Facebook,
  Github,
  Instagram,
  Telegram,
} from "react-bootstrap-icons";
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
              A hardworking person who is attentive to details and focused on
              the quality of work. A good team player, so I have such qualities
              as sociability and a positive attitude.
            </p>
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
