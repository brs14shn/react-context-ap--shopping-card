import React from "react";
import SingleProducts from "../components/SingleProducts";
import { useCardCustomContext } from "../context/CardContextProvider";

const Home = () => {
  const { state } = useCardCustomContext();
  // console.log(state);
  const { products, card } = state;
  console.log(products);

  return (
    <div className="home">
      {/* <Filters/> */}
      <div className="productContainer">
        {products.map((product) => {
          // return <span>{product.name}</span>;
          return <SingleProducts product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
