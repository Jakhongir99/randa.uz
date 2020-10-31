import React from "react";
import { Row, Col } from "antd";
import "./Services.css";
import responseWebPage from "../../../images/responsive-webpage 1.svg";
import analytics from "../../../images/analytics 1.svg";
import mobileApp from "../../../images/mobile-app 1.svg";
const Services = () => {
  return (
    <main className="Services">
      <div className="container">
        <h1> Bizga qaysi masalalar bo’yicha murojaat qilish mumkin ?</h1>
        <div>
          <Row className="cards">
            <Col xs={24} sm={12} md={6} lg={6}>
              <div className="card">
                <img
                  src={responseWebPage}
                  alt="responseWebPage"
                  width="75"
                  height="75"
                />
                <p>Web saytlar va sahifalar</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <div className="card">
                <img
                  src={analytics}
                  alt="analytics"
                  width="75"
                  hegheight="75"
                />
                <p>Hisobot yuritish platformalari</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <div className="card">
                <img
                  src={mobileApp}
                  alt="mobileApp"
                  width="75"
                  hegheight="75"
                />
                <p>Mobil ilovalar</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </main>
  );
};

export default Services;
