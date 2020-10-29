import React from "react";
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer/Footer";
import bookImage from "../../images/book 1.png";
import "./Book.css";
const Book = () => {
  return (
    <div>
      <Header />
      <div className="bookUs">
        <div className="container">
          <h1>Buyurtma berish</h1>
          <div className="info">
            <form className="formInfo">
              <input type="text" placeholder="Tashkilot nomi" />
              <input
                type="text"
                placeholder="Loyiha haqida qisqacha ma'lumot"
              />
              <input type="email" placeholder="Elektron pochta" />
              <input type="number" placeholder="Telefon raqam" />
              <input type="text" placeholder="Ism Familiya" />
              <button>Ariza Yuborish</button>
            </form>
            <div className="bookImage">
              <img src={bookImage} alt="bookImage" width="516" height="300" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
