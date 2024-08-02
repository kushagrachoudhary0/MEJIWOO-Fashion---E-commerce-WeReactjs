import React from "react";

export default function Cardprops(props) {
  return (
    <div>
      <div className="dress-box">
        <div className="dress-img">
          <img src={props.img} alt="Image of dress" className="img" />
        </div>
        <div className="name-title">
          <h3>{props.title}</h3>
        </div>
        <div className="dress-rate">
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}
