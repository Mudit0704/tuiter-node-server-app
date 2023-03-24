import React from "react";
import TuitList from "../tuits/TuitsList";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return(
      <>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitList/>
      </>
  );
};
export default HomeComponent;