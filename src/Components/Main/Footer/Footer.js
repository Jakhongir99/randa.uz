import React from "react";
import { Row, Col } from "antd";
import logoWhite from "../../../images/logo_white.png";
import telegram from "../../../images/telegram 1.svg";
import twitter from "../../../images/twitter 1.svg";
import instagram from "../../../images/instagram 1.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container_footer">
          <Row className="footer_Row">
            <Col xs={24} sm={12} md={8} lg={8}>
              <img
                src={logoWhite}
                alt="logoWithOpacity"
                width="142"
                height="85"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <div className="social">
                <img
                  src={instagram}
                  alt="telegram_icon"
                  width="28"
                  height="28"
                />
                <img src={twitter} alt="telegram_icon" width="28" height="28" />
                <img
                  src={telegram}
                  alt="telegram_icon"
                  width="28"
                  height="28"
                />
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                lacinia elit, nec commodo turpis. Ut eget justo faucibus,
                sagittis lectus non.
              </p>
            </Col>
          </Row>
          <p className="copy">Copyright www.randa.uz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
