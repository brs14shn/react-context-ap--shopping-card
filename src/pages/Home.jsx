import React from "react";
import { useCardCustomContext } from "../context/CardContextProvider";

const Home = () => {
  const { state } = useCardCustomContext();
  // console.log(state);
  const { products, card } = state;
  console.log(products);

  return <div>Home</div>;
};

export default Home;
