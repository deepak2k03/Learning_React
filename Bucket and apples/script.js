const basketOneCount=document.querySelector(".basket-1 span")
const basketTwoCount=document.querySelector(".basket-2 span")
const RightArrow=document.querySelector(".right-arrow")
const LeftArrow=document.querySelector(".left-arrow")

const totalApples=10;

let SecondBasketAppleCount=0;
let FirstBasketAppleCount=totalApples-SecondBasketAppleCount

basketOneCount.innerText=FirstBasketAppleCount
basketTwoCount.innerText=SecondBasketAppleCount
RightArrow.addEventListener('click',()=>{
    if(FirstBasketAppleCount>0){
        FirstBasketAppleCount--;
        SecondBasketAppleCount++;
        basketOneCount.innerText=FirstBasketAppleCount
        basketTwoCount.innerText=SecondBasketAppleCount
    }
})
LeftArrow.addEventListener('click',()=>{
    if(SecondBasketAppleCount>0){
        FirstBasketAppleCount++;
        SecondBasketAppleCount--;
        basketOneCount.innerText=FirstBasketAppleCount
        basketTwoCount.innerText=SecondBasketAppleCount
    }
})