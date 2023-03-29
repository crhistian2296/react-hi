import React from "react";
import Card from "./Card.jsx";

let numCards = [0,0,0,0];
let num = 4;
const CardGrid = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {numCards.map((value, index) => index < num && <Card key={index}/>)}
    </div>
  );
};

export default CardGrid;
