import React, { useState, useEffect } from "react";

import Image1 from "../images/Frame 15.png";
import Image2 from "../images/hero2.jpeg";
import Image3 from "../images/hero3.jpeg";
import Image4 from "../images/hero5.jpeg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const arr = [Image4, Image1, Image2, Image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrl = arr[currentIndex];

  const pre = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : arr.length - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex < arr.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const intervalId = setInterval(next, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
      <img src={imageUrl} alt="Slideshow" className="hero-img" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
        }}
      >
        <button
          style={{
            textTransform: "capitalize",
            padding: "2rem",
            backgroundColor: "transparent",
            borderRadius:"50%",
          }}
          onClick={pre}
        >
          <FaChevronLeft/>
        </button>
        <button
         style={{
          textTransform: "capitalize",
          padding: "2rem",
          backgroundColor: "transparent",
          borderRadius:"50%",
        }}
          onClick={next}
        >
          <FaChevronRight/>
        </button>
      </div>
    </div>
  );
}
