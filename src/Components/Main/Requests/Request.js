import React from "react";
import "./Request.css";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import logoWithOpacity from "../../../images/logoOpacity.png";
const Request = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h1 className="text">{t("requests_mainText.1")}</h1>
      <div className="request">
        <div className="container_request">
          <Row className="Request_Row">
            <Col xs={24} sm={12} md={8} lg={8}>
              <p>{t("request_left_text.1")}</p>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <img
                src={logoWithOpacity}
                alt="logoWithOpacity"
                width="147"
                height="89"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <button>{t("request_give_order.1")}</button>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Request;
