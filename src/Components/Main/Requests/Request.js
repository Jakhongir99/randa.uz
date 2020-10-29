import React from "react";
import "./Request.css";
import { Row, Col } from "antd";
import logoWithOpacity from "../../../images/logoOpacity.png";
const Request = () => {
  return (
    <section>
      <h1 className="text">Xayrlashmaymiz</h1>
      <div className="request">
        <div className="container_request">
          <Row className="Request_Row">
            <Col span={8}>
              {" "}
              <p>Tortinmasdan xohlagan paytizda murojaat qilishingiz mumkin</p>
            </Col>
            <Col span={8}>
              {" "}
              <img
                src={logoWithOpacity}
                alt="logoWithOpacity"
                width="147"
                height="89"
              />
            </Col>
            <Col span={8}>
              <button>Buyurtma berish</button>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Request;