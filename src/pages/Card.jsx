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
      <div className="d-flex gap-2">
        {products?.map((product, index) => (
          <img src={product.image} alt="" style={{ width: 100 }} />
        ))}
      </div>
    </div>
  );
};

export default Card;
