import Button from "./Button.js";
import left from "url:../assets/images/l.png"
import right from "url:../assets/images/r.png"
import AppleBasket from "./AppleBasket.js";


import { createRoot } from "react-dom/client";
// const root = createRoot(document.querySelector('#root'));
import "./AppleCounter.css"
import { useState } from "react";

const AppleCounter = () =>{
  
  const totalAppleCount=10;
  const [RightAppleCount, SetRightAppleCount]=useState(0); 
  const [LeftAppleCount, SetLeftAppleCount]=useState(totalAppleCount-RightAppleCount); 

  const leftClickHandler = ()=>{
    console.log("Left")
    if(RightAppleCount>0){
      SetRightAppleCount(RightAppleCount-1);
      SetLeftAppleCount(LeftAppleCount+1);
    }
  }  
  
  const RightClickHandler = ()=>{
    if(LeftAppleCount>0){
      SetRightAppleCount(RightAppleCount+1);
      SetLeftAppleCount(LeftAppleCount-1);
    }
    console.log("Right")
  } 
  return (
    <section>
      <AppleBasket appleCount={LeftAppleCount} BasketName="Basket-1"/>
      <Button clickHandler={leftClickHandler} imageURL={left} ButtonName="Left Arrow" />
      <Button clickHandler={RightClickHandler} imageURL={right} ButtonName="Right Arrow"/>
      <AppleBasket appleCount={RightAppleCount} BasketName="Basket-1"/>
    </section>
  )
}
export default AppleCounter;
  