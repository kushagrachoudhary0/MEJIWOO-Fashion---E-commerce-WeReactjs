import React, { useState } from "react";

const Carousel = ({ children:slider }) => {
    const [current, setCurrent]= React.useState(0)
    const back=()=>{
       setCurrent(( current)=>( current===0?slider.length-1:current-1))
    }
    const next=()=>{
       setCurrent(( current)=>( current===slider.length-1?0:current+1))
    }

  return ( 
    <div>
      <div>{slider}</div>
      <div>
        <button onClick={back}>back</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default Carousel;