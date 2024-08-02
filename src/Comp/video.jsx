import React from "react";

export default function video(props) {
  return (
    <div className="dress-img">
      <video width="750" height="500" autoPlay loop className="img">
        <source
          src={props.video}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
