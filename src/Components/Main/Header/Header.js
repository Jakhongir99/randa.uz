import React, { useState } from "react";
import "./Header.css";
import logo from "../../../images/logo.svg";
import i18n from "../../../lang/i18next";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

const Header = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));
  const { t } = useTranslation();
  function handleChange(value) {
    setLang(value);
    i18n.changeLanguage(value);
  }
  return (
    <header>
      <div className="container">
        <Row className="navWrapper">
          <Col xs={24} sm={6} md={8} lg={8}>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" width="74" height="45" />
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={18} md={16} lg={16}>
            <ul className="listItems">
              <li>
                <Link to="/aboutUs">{t("menu_aboutUs.1")}</Link>
              </li>
              <li>{t("menu_ourProject.1")}</li>
              <li>
                <Link to="/contactUs">{t("menu_connect.1")}</Link>
              </li>
              <li>
                <Link to="/bookUs">{t("menu_giveOrder.1")}</Link>
              </li>
              <div className="lang">
                <Select
                  value={lang}
                  style={{ width: 80 }}
                  onChange={handleChange}
                >
                  <Option value="uz">Uz</Option>
                  <Option value="ru">Ru</Option>
                  <Option value="en">En</Option>
                </Select>
              </div>
            </ul>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
