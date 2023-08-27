import React from "react";
import ShoeList from "./ShoeList";
import data from "./data.json";
import { useState } from "react";
import ShoeModal from "./ShoeModal";
export default function ShoeShop() {
  // state quản lí giá trị sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setselectedProduct] = useState(null);
  const handleGetProduct = (product) => {
    setselectedProduct(product);
  };

  return (
    <div className="container">
      <h1 className="text-center text-danger">Shoe Shop</h1>
      <ShoeList products={data} onGetProduct={handleGetProduct} />
      <ShoeModal product={selectedProduct} />
    </div>
  );
}
