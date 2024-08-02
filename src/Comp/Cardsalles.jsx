import React from 'react'
import Imag12 from "../images/352158854_3608341479451255_1472828259758897531_n 1.png";
import Imag13 from "../images/355278786_1944515739251375_2601576688677791938_n 1.png";
import Imag14 from "../images/356039326_816908229869602_5989506973685575536_n 1.png";



export default function Cardsalles() {
  return (
       <div className="main-box">
          <div className='best-sale'>
        <h1 className='best-sale1'>Our Best Seller</h1>
    </div>
    <div className="cardlist">
    <div className="card-box">
    <div className="dress-box">
          <div className="dress-img"><img src={Imag14} alt="Image of dress" className="img" /></div>
          <div className="name-title"><h3>Euphoria Crop Blouse</h3></div>
          <div className="dress-rate"><p>Rp. 125.000</p></div>
    </div>
    <div className="dress-box">
          <div className="dress-img"><img src={Imag12} alt="Image of dress" className="img" /></div>
          <div className="name-title"><h3>Venus Halter Dress</h3></div>
          <div className="dress-rate"><p>Rp. 180.000</p></div>
    </div>
    <div className="dress-box">
          <div className="dress-img"><img src={Imag13} alt="Image of dress" className="img" /></div>
          <div className="name-title"><h3>Snap Pure Blouse</h3></div>
          <div className="dress-rate"><p>Rp. 129.000</p></div>
    </div>
    </div>
    </div>
    
       </div>
  )
}
