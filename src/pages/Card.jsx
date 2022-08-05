import React from "react";
// import { CardContext } from "../context/CardContextProvider";
import { useCardCustomContext } from "../context/CardContextProvider";

const Card = () => {
  // const { products } = useContext(CardContext);
  //? products bilgisini context'den okuduk
  const { products } = useCardCustomContext();

  console.log(products);
  return (
    <div>
      <h1>Card</h1>
      <div>
        {products?.map((product, index) => (
          <p>{product.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
