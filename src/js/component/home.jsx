import React from "react";
import CardGrid from "./CardGrid.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Jumbotron />
          <CardGrid />
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default Home;
