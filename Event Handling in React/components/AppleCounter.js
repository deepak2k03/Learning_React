import Button from "./Button.js";
import left from "url:../assets/images/l.png"
import right from "url:../assets/images/r.png"
import AppleBasket from "./AppleBasket.js";

const totalAppleCount=10;
let SecondBasketAppleCount=0;
let FisrtBasketAppleCount=totalAppleCount-SecondBasketAppleCount;

import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector('#root'));
import "./AppleCounter.css"

const AppleCounter = () =>{

  const leftClickHandler = ()=>{
    console.log("Left")
    if(SecondBasketAppleCount>0){
      FisrtBasketAppleCount++;
      SecondBasketAppleCount--;
      root.render(<AppleCounter />);
    }
  }  
  
  const RightClickHandler = ()=>{
    if(FisrtBasketAppleCount>0){
      FisrtBasketAppleCount--;
      SecondBasketAppleCount++;
      root.render(<AppleCounter />);
    }
    console.log("Right")
  }  

  return (
    <section>
      <AppleBasket appleCount={10} BasketName="Basket-1"/>
      <Button clickHandler={leftClickHandler} imageURL={left} ButtonName="Left Arrow" />
      <Button clickHandler={RightClickHandler} imageURL={right} ButtonName="Right Arrow"/>
      <AppleBasket appleCount={0} BasketName="Basket-1"/>
    </section>
  )
}
export default AppleCounter;
  