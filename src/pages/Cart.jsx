import React, { useState, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
// import { CardContext } from "../context/CardContextProvider";
import { useCardCustomContext } from "../context/CardContextProvider";

const Cart = () => {
  const { state, dispatch } = useCardCustomContext();
  const { products, cart } = state;

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((product) => (
            <span>{product.name}</span>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal({cart.length})</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total : {total}₺</span>
        <Button type="button" disabled={cart.length == 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
