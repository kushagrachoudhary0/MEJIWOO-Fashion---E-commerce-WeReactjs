import React from 'react'
import Collection12 from "../images/sell1.png";
import Collection1 from "../images/sell2.png";
import Collection2 from "../images/sell3.png";
import Collection3 from "../images/sell4.png";
import Collection4 from "../images/sell5.png";


export default function Collection() {
  return (
        <div className="main-collect">
          <div className='best-sale'>
        <h1 className='best-sale1'>Our Featured Collections</h1>
    </div>
    <div className="main-coll">
    <div className="child-coll">
    <div className="dress-box">
          <div className="cell1"><img src={Collection12} alt="Image of dress" className="sell" /></div>
          <div className="cell2"><img src={Collection1} alt="Image of dress" className="sell" /></div>
    </div>
    <div className="dress-box">
          <div className="cell3"><img src={Collection2} alt="Image of dress" className="sell2" /></div>
    </div>
    <div className="dress-box">
          <div className="cell4"><img src={Collection3} alt="Image of dress" className="sell" /></div>
          <div className="cell5"><img src={Collection4} alt="Image of dress" className="sell" /></div>
    </div>
    </div>
    </div>
    
       </div>
  )
}
