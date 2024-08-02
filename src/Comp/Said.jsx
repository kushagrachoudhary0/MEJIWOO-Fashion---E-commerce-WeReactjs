import React from "react";
import black from "../images/balck1.png";
import black1 from "../images/black2.png";
import black2 from "../images/black3.png";

export default function Said() {
  return (
    <div className="main-collect">
      <div className="best-sale">
        <h1 className="best-sale1">What They Said</h1>
      </div>
      <div className="main-black">
        <div className="child-black">
          <div className="dress-block">
            <div className="cell3">
              <div className="imagg">
                {" "}
                <img src={black} alt="Image of dress" className="sell2" />
              </div>
              <h4>Essence Long Denim</h4>
              <p>-Lisa-</p>
              <p>
                “I like this pants. Its fit and perfect for me. The material is
                so comfortable that it can be used anywhere. It is also suitable
                to be combined with all types of my clothes.”
              </p>
            </div>
            <div className="cell3">
              <div className="imagg">
                {" "}
                <img src={black1} alt="Image of dress" className="sell2" />
              </div>
              <h4>Andcable Knit Top</h4>
              <p>-Celine-</p>
              <p>
                “I like knitted materials. I bought this shirt because the
                design is very pretty and comfortable to wear casually. The
                material is also neat and good. I love shopping here and I’ll be
                a frequent customer at this store.”
              </p>
            </div>
            <div className="cell3">
              <div className="imagg">
                {" "}
                <img src={black2} alt="Image of dress" className="sell2" />
              </div>
              <h4>Candy Stripe Boxy</h4>
              <p>-Tiffany-</p>
              <p>
                “This shirt is very pretty and nice. The color is cute too. At
                first I bought it as a present for my friend but I also wanted
                it so we ended up going out wearing twin clothes haha.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
