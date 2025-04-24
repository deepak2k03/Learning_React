import Button from "./Button.js";
import left from "url:../assets/images/l.png"
import right from "url:../assets/images/r.png"
import AppleBasket from "./AppleBasket.js";
import "./AppleCounter.css"

const AppleCounter = () => (
    <section>
      <AppleBasket appleCount={10} BasketName="Basket-1"/>
      <Button imageURL={left} />
      <Button imageURL={right} />
      <AppleBasket appleCount={0} BasketName="Basket-1"/>

    </section>
  );
  export default AppleCounter;
  