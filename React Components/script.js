import { createRoot } from "react-dom/client";
import React from "react";
import "./styles.css";
function Card(props) {
  //destructuring
  const { key, title, image, brand, price } = props;
  return (
    <div className="card" key={key}>
      <img src={image} alt="" />

      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];
const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return(
            <Card
            key={product.id}
            title={product.title}
            image={product.thumbnail}
            brand={product.brand}
            price={product.price}
            />
          )
        })}
      </div>
    );
  });

// root.render({
//   $$typeof: Symbol.for('react.element'),
//   type:Card,
//   ref:null,
//   props: {
//     title: 'object',
//     image: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png',
//     brand: 'Cosmetics',
//     price: '899',
//     key:12
//   }
// })

// root.render(React.createElement(Card, {
//   title: 'object',
//     image: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png',
//     brand: 'Cosmetics',
//     price: '899',
//     key:12,
// }))

// root.render(<Card
//    title= 'object'
//     image= 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png'
//     brand= 'Cosmetics'
//     price= '899'
// />)
