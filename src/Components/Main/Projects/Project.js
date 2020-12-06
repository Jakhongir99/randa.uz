import React from "react";
import "./Project.css";
import image from "../../../images/matn.uz 2.png";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
const Project = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <h1>{t("projects_mainText.1")}</h1>
        <Row className="projects">
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>{t("projects_firstCardText.1")}</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>{t("projects_firstCardText.1")}</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>{t("projects_firstCardText.1")}</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>{t("projects_firstCardText.1")}</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>{t("projects_firstCardText.1")}</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className="project">
              <img src={image} alt="adImage" width="330" height="172" />
              <p>{t("projects_firstCardText.1")}</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Project;
