import React, { useState } from "react";
import Imag01 from "../images/Frame 4.png";
import Imag02 from "../images/Frame 17.png";
import Imag03 from "../images/Frame 18.png";
import Imag04 from "../images/Frame 19.png";
import Imag05 from "../images/Frame 20.png";
import Imag06 from "../images/Frame 21.png";
import Imag07 from "../images/onchange/onchnage.png";
import Imag08 from "../images/onchange/onchnage1.png";
import Imag09 from "../images/onchange/onchnage2.png";
import Imag10 from "../images/onchange/onchnage3.png";
import Imag11 from "../images/onchange/onchnage4.png";
import Imag12 from "../images/onchange/onchnage6.png";
import Imag13 from "../images/onchange/onchnage7.png";
import Imag14 from "../images/onchange/onchnage8.png";
import Imag15 from "../images/onchange/onchnage9.png";
import Imag16 from "../images/onchange/onchnage10.png";
import Imag17 from "../images/onchange/onchnage11.png";
import Imag188 from "../images/onchange/onchange16.png";
import Imag18 from "../images/onchange/onchange21.png";
import Imag20 from "../images/onchange/onchange22.png";
import Imag21 from "../images/onchange/onchange23.png";
import Imag22 from "../images/onchange/onchange24.png";
import Imag23 from "../images/onchange/onchange25.png";
import Imag24 from "../images/onchange/onchange26.png";
import Imag26 from "../images/onchange/onchange27.png";
import Imag27 from "../images/onchange/onchange28.png";
import Imag28 from "../images/onchange/onchange29.png";
import Imag29 from "../images/onchange/onchange30.png";
import Imag30 from "../images/onchange/onchange31.png";
import Imag31 from "../images/onchange/onchange32.png";
import Cardprops from "./Cardprops";

export default function Main() {
  const [active, setActive] = useState("Top");

  return (
    <div className="main-div">
      <div className="main-box">
        <div className="best-sale">
          <h1 className="best-sale1">Our Products</h1>
        </div>
        <div className="btn-box">
          <div className="btn-boxx">
            <button
              className={`${active === "top" && "active-tab"} btn-child`}
              id="btn"
              onClick={() => setActive("Top")}
            >
              Top
            </button>
            <button
              className={`${active === "Bottom" && ""} btn-child`}
              id="tab1"
              onClick={() => setActive("Bottom")}
            >
              Bottom
            </button>
            <button
              className={`${active === "Dress" && ""} btn-child`}
              id="tab2"
              onClick={() => setActive("Dress")}
            >
              Dress
            </button>
            <button
              className={`${active === "Set" && ""} btn-child`}
              id="tab3"
              onClick={() => setActive("Set")}
            >
              Set
            </button>
            <button
              className={`${active === "Knit" && ""} btn-child`}
              id="tab4"
              onClick={() => setActive("Knit")}
            >
              Knit
            </button>
            <button
              className={`${active === "Outer" && ""} btn-child`}
              id="tab5"
              onClick={() => setActive("Outer")}
            >
              Outer
            </button>
          </div>
        </div>
        <div className="cardlist2">
          {active==="Top" && <div className="card-box1">
            <Cardprops img={Imag01} title="Best Sale" price="Rp. 130.000" />
            <Cardprops
              img={Imag02}
              title="Macaroon Dry Half"
              price="Rp. 139.000"
            />
            <Cardprops
              img={Imag03}
              title="Wave Stripe Hally "
              price="Rp. 130.000"
            />
            <Cardprops
              img={Imag04}
              title="Eve Punching Floral"
              price="Rp. 229.000"
            />
            <Cardprops
              img={Imag05}
              title="Floral Waffle Tee"
              price="Rp. 119.000"
            />
            <Cardprops
              img={Imag06}
              title="Snap Pure Blouse"
              price="Rp. 225.000"
            />
          </div>}


          {active==="Bottom" && <div className="card-box2" id="tab2">
            <Cardprops img={Imag07} 
            title="change" 
            price="Rp. 130.000" />
            <Cardprops
              img={Imag08}
              title="Macaroon Dry Half"
              price="Rp. 139.000"
            />
            <Cardprops
              img={Imag09}
              title="Wave Stripe Hally "
              price="Rp. 130.000"
            />
            <Cardprops
              img={Imag10}
              title="Eve Punching Floral"
              price="Rp. 229.000"
            />
            <Cardprops
              img={Imag11}
              title="Floral Waffle Tee"
              price="Rp. 119.000"
            />
            <Cardprops
              img={Imag12}
              title="Snap Pure Blouse"
              price="Rp. 225.000"
            />
          </div>}


          {active==="Dress" && <div className="card-box2" id="tab2">
            <Cardprops img={Imag188} 
            title="change" 
            price="Rp. 130.000" />
            <Cardprops
              img={Imag13}
              title="Macaroon Dry Half"
              price="Rp. 139.000"
            />
            <Cardprops
              img={Imag14}
              title="Wave Stripe Hally "
              price="Rp. 130.000"
            />
            <Cardprops
              img={Imag15}
              title="Eve Punching Floral"
              price="Rp. 229.000"
            />
            <Cardprops
              img={Imag16}
              title="Floral Waffle Tee"
              price="Rp. 119.000"
            />
            <Cardprops
              img={Imag17}
              title="Snap Pure Blouse"
              price="Rp. 225.000"
            />
          </div>}


          {active==="Set" && <div className="card-box2" id="tab2">
            <Cardprops img={Imag24} 
            title="change" 
            price="Rp. 130.000" />
            <Cardprops
              img={Imag18}
              title="Macaroon Dry Half"
              price="Rp. 139.000"
            />
            <Cardprops
              img={Imag20}
              title="Wave Stripe Hally "
              price="Rp. 130.000"
            />
            <Cardprops
              img={Imag21}
              title="Eve Punching Floral"
              price="Rp. 229.000"
            />
            <Cardprops
              img={Imag22}
              title="Floral Waffle Tee"
              price="Rp. 119.000"
            />
            <Cardprops
              img={Imag23}
              title="Snap Pure Blouse"
              price="Rp. 225.000"
            />
          </div>}


          { active==="Knit" && <div className="card-box2" id="tab2">
            <Cardprops img={Imag31} 
            title="change" 
            price="Rp. 130.000" />
            <Cardprops
              img={Imag26}
              title="Macaroon Dry Half"
              price="Rp. 139.000"
            />
            <Cardprops
              img={Imag27}
              title="Wave Stripe Hally "
              price="Rp. 130.000"
            />
            <Cardprops
              img={Imag28}
              title="Eve Punching Floral"
              price="Rp. 229.000"
            />
            <Cardprops
              img={Imag29}
              title="Floral Waffle Tee"
              price="Rp. 119.000"
            />
            <Cardprops
              img={Imag30}
              title="Snap Pure Blouse"
              price="Rp. 225.000"
            />
          </div>}

          {active==="Outer" && <div className="card-box2" id="tab2">
            <Cardprops img={Imag07} 
            title="change" 
            price="Rp. 130.000" />
            <Cardprops
              img={Imag08}
              title="Macaroon Dry Half"
              price="Rp. 139.000"
            />
            <Cardprops
              img={Imag09}
              title="Wave Stripe Hally "
              price="Rp. 130.000"
            />
            <Cardprops
              img={Imag10}
              title="Eve Punching Floral"
              price="Rp. 229.000"
            />
            <Cardprops
              img={Imag11}
              title="Floral Waffle Tee"
              price="Rp. 119.000"
            />
            <Cardprops
              img={Imag12}
              title="Snap Pure Blouse"
              price="Rp. 225.000"
            />
          </div>}






        </div>
        <div className="btn-see-more">
          <button className="btn-see-more1">
            SEE MORE{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12H22M22 12L13 3M22 12L13 21"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
