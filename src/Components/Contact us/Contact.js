import React from "react";
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer/Footer";
import customerSupport from "../../images/customer-support 1.png";
import fileTransfer from "../../images/file-transfer 1.png";
import "./Contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="contactUs">
        <div className="container">
          <h1>Bog’lanish</h1>
          <div className="contactUs_cards">
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
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
