import React from 'react'

const AppleBasket=({appleCount, BasketName})=> {
  return (
    <div className='apple-basket'>
        <h1>
            <span>{appleCount}</span> apples
        </h1>
        <p>
            {BasketName}
        </p>
    </div>
  )
}

export default AppleBasket