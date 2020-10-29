import React from "react";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Project from "./Projects/Project";
import Request from "./Requests/Request";
import Footer from "./Footer/Footer";
const Main = () => {
  return (
    <div>
      <Header />
      <Services />
      <Project />
      <Request />
      <Footer />
    </div>
  );
};
export default Main;
