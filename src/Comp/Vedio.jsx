import React from "react";
import Video1 from '../images/video.mp4'

export default function Vedio() {
  return (
    <div className="main-box">
      <div className="cardlist">
        <div className="vedio-box">
          <div className="dress-box">
            <div className="dress-img">
            <video autoPlay loop muted className=" vedio01">
                <source
                  src={Video1}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="dress-img">
          <video autoPlay loop muted className=" vedio01">
              <source
                src="https://littleboxindia.com/cdn/shop/videos/c/vp/0ab8d3c441da44718d7594f6cd448525/0ab8d3c441da44718d7594f6cd448525.HD-1080p-3.3Mbps-25425878.mp4?v=0"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="dress-box">
            <div className="dress-img">
            <video autoPlay loop muted className=" vedio01">
                <source
                  src="https://littleboxindia.com/cdn/shop/videos/c/vp/e4d5368eb1934b5f99cc5b4ffae67400/e4d5368eb1934b5f99cc5b4ffae67400.HD-1080p-3.3Mbps-25425880.mp4?v=0"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="dress-box">
            <div className="dress-img">
              <video autoPlay loop muted className=" vedio01">
                <source
                  src="https://littleboxindia.com/cdn/shop/videos/c/vp/7e8cdb0e858a4b4387cfa317c38e1d03/7e8cdb0e858a4b4387cfa317c38e1d03.HD-1080p-4.8Mbps-25425879.mp4?v=0"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="best-sale">
        <h1 className="best-sale1">Our Best Seller</h1>
      </div>
    </div>
  );
}
