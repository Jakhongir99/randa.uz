import React from "react";
import "./Header.css";
import logo from "../../../images/logo.svg";
import { Row, Col } from "antd";
import { Select } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;

const Header = () => {
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
                <Link to="/aboutUs">Biz haqimizda</Link>
              </li>
              <li>Loyihalarimiz</li>
              <li>
                <Link to="/contactUs">Bog’lanish</Link>
              </li>
              <li>
                <Link to="/bookUs">Buyurtma berish</Link>
              </li>
              <div className="lang">
                <Select
                  defaultValue="Uz"
                  style={{ width: 60 }}
                  bordered={false}
                >
                  <Option value="Uz">Uz</Option>
                  <Option value="Ru">Ru</Option>
                  <Option value="En">En</Option>
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
