import React from "react";
import Nav from "../Nav";
import home from "../../images/home.jpeg";

const Home = () => {
  return <img className='home-img' src={home} />;
};

export default Nav(Home);