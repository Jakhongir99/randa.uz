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
          <Col span={8}>
            <img src={image} alt="adImage" width="330" height="172" />
            <p>Matn.uz mobil ilovasi</p>
          </Col>
          <Col span={8}>
            <img src={image} alt="adImage" />
            <p>Loyiha nomi uchun joy</p>
          </Col>
          <Col span={8}>
            <img src={image} alt="adImage" />
            <p>Loyiha nomi uchun joy</p>
          </Col>
        </Row>
        <Row className="projects">
          <Col span={8}>
            <img src={image} alt="adImage" width="330" height="172" />
            <p>Matn.uz mobil ilovasi</p>
          </Col>
          <Col span={8}>
            <img src={image} alt="adImage" />
            <p>Loyiha nomi uchun joy</p>
          </Col>
          <Col span={8}>
            <img src={image} alt="adImage" />
            <p>Loyiha nomi uchun joy</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Project;
