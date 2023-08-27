import React from "react";
export default function ShoeItem({ product, onGetProduct }) {
  return (
    <div className="card">
      <img className="card-img" src={product.image} alt="product" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}</p>
        <button className="btn btn-dark">Add to Cart</button>
        <button
          className="btn btn-success ms-5"
          onClick={() => onGetProduct(product)}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
