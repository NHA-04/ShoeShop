import React from "react";
import ShoeItem from "./ShoeItem";
export default function ShoeList({ products, onGetProduct }) {
  const handleGetProduct = (product) => {
    onGetProduct(product);
  };
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-md-4">
            <ShoeItem product={product} onGetProduct={handleGetProduct} />
          </div>
        );
      })}
    </div>
  );
}
