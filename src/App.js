import React from "react";
import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import About from "./Components/About us/About";
import Contact from "./Components/Contact us/Contact";
import Book from "./Components/Book/Book";
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/aboutUs" component={About} />
      <Route exact path="/contactUs" component={Contact} />
      <Route exact path="/bookUs" component={Book} />
    </Switch>
  );
};
export default App;
