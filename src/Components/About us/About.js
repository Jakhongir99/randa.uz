import React from "react";
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer/Footer";
import { Row, Col } from "antd";
import aboutPageImage from "../../images/Ресурс 1@3x 1.png";
import "./About.css";
const About = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="aboutUs">
        <div className="container_aboutPage">
          <Row className="aboutUs_Row">
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="aboutPageText">
                <h1>Biz haqimizda</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  mollis eros nec euismod blandit. Proin malesuada, purus quis
                  placerat mattis, massa nunc accumsan lacus, quis sagittis
                  ligula ante sed elit.
                  <br />
                  <br /> Quisque leo metus, fringilla quis laoreet eu, porttitor
                  non augue. Integer iaculis faucibus aliquet. Integer
                  scelerisque facilisis finibus. Vivamus et orci sit amet orci
                  tincidunt rhoncus. Sed sodales, nibh id maximus porttitor,
                  turpis ex malesuada lectus, sit amet tincidunt massa turpis
                  eget justo. Ut dapibus fringilla diam ut suscipit.{" "}
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="aboutPageImage">
                <img
                  src={aboutPageImage}
                  alt="aboutPageImage"
                  width="488"
                  height="374"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
