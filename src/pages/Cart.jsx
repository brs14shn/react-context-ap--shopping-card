import React from "react";
// import { CardContext } from "../context/CardContextProvider";
import { useCardCustomContext } from "../context/CardContextProvider";

const Cart = () => {
  // const { products } = useContext(CardContext);
  //? products bilgisini context'den okuduk
  const { products } = useCardCustomContext();

  console.log(products);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
