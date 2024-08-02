import React from "react";
import Imag from "../images/Frame 4.png";
import Imag2 from "../images/Frame 5.png";
import Imag3 from "../images/Frame 6.png";

export default function Cardlist() {
  return (
    <div className="cardlist">
      <div className="child">
        <div className="child1">
          <div className="hero">
            <img src={Imag} alt="Image of dress" className="img" />
          </div>
          <div className="title">
            <h1>SPRING</h1>
          </div>
          <div className="btn">
             <button className="btn-card">MORE</button>
          </div>
        </div>
        <div className="child1">
          <div className="hero">
            <img src={Imag2} alt="Image of dress" className="img" />
          </div>
          <div className="title">
            <h1>SUMMER</h1>
          </div>
          <div className="btn">
             <button className="btn-card">MORE</button>
          </div>
        </div>

        <div className="child1">
          <div className="hero">
            <img src={Imag3} alt="Image of dress" className="img" />
          </div>
          <div className="title">
            <h1>WINTER</h1>
          </div>
          <div className="btn">
             <button className="btn-card">MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
