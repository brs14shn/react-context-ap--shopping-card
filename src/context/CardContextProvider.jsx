import { createContext, useContext } from "react";
import { faker } from "@faker-js/faker";

//? 1- Defining
export const CardContext = createContext();

//?//? 3-Consume function (Custom Hook)
export const useCardCustomContext = () => {
  return useContext(CardContext);
};

//? 2- Provider Component
const CardContextProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.city(),
    inStock: faker.random.numeric([0, 3, 4, 4, 5, 3]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.numeric([1, 2, 3, 4, 5]),
  }));
  console.log(products);

  return (
    <CardContext.Provider value={products}>{children}</CardContext.Provider>
  );
};
export default CardContextProvider;