import React from "react";
import "./Project.css";
import image from "../../../images/matn.uz 2.png";
import { Row, Col } from "antd";
const Project = () => {
  return (
    <section>
      <div className="container">
        <h1>Bizning loyihalar</h1>
        <Row className="projects">
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>Matn.uz mobil ilovasi</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>Matn.uz mobil ilovasi</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>Matn.uz mobil ilovasi</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>Matn.uz mobil ilovasi</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>Matn.uz mobil ilovasi</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>Matn.uz mobil ilovasi</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Project;
