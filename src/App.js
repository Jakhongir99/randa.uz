import React from "react";
import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Components/Main/Main";
import About from "./Components/aboutUs/About";
import Contact from "./Components/contactUs/Contact";
import Book from "./Components/book/Book";
import Header from "./Components/Main/header/Header";
import Footer from "./Components/Main/footer/Footer";
const App = () => {
  const styles = {
    textAlign: "center",
    width: "100%",
    height: "65.1vh",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
  };
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/aboutUs" component={About} />
        <Route exact path="/contactUs" component={Contact} />
        <Route exact path="/bookUs" component={Book} />
        <Route
          path="*"
          exact={true}
          render={() => <h1 style={styles}>Page Not Found</h1>}
        />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
