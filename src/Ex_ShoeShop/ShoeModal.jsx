import React from "react";

export default function ShoeModal({ product }) {
  if (!product) {
    return null;
  }
  return (
    <div className="row mt-5">
      <div className="col-md-5 shoe-image">
        <h3 className="text-center text-success">{product.name}</h3>
        <img
          src={product.image}
          alt={product.name}
          width="100%"
          height="500px"
        />
      </div>
      <div className="col-md-7 shoe-details">
        <h3>Chi Tiết Sản Phẩm</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Alias</td>
              <td>{product.alias}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>Short Description</td>
              <td>{product.shortDescription}</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>{product.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
