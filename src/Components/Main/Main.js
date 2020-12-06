import React from "react";
import Services from "./services/Services";
import Project from "./projects/Project";
import Request from "./requests/Request";
const Main = () => {
  return (
    <React.Fragment>
      <Services />
      <Project />
      <Request />
    </React.Fragment>
  );
};
export default Main;
