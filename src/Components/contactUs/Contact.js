import React from "react";
import { Row, Col } from "antd";
import customerSupport from "../../images/customer-support 1.png";
import fileTransfer from "../../images/file-transfer 1.png";
import "./Contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <div className="contactUs">
        <div className="container">
          <h1>Bog’lanish</h1>
          <Row className="contactUs_cards">
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className="contactUs_card">
                <img
                  src={customerSupport}
                  alt="customerSupport"
                  width="87"
                  height="87"
                />
                <p>
                  Agar sizga yordamimiz kerak bo’lsa quyida ko’rsatilgan telefon
                  raqami orqali bog’lanishingiz mumkin.
                </p>
                <p className="callNumber">+998 90 111 4744</p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className="contactUs_card">
                <img
                  src={fileTransfer}
                  alt="fileTransfer"
                  width="87"
                  height="87"
                />
                <p>
                  Yoki quyidagi tugmani bosing va bizga murojaat jo’nating. Tez
                  orada biz siz bilan bog’lanamiz.
                </p>
                <p className="giveBook">Buyurtma berish</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
