import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { useCardCustomContext } from "../context/CardContextProvider";

const SingleProducts = ({ product }) => {
  const { state, dispatch } = useCardCustomContext();
  // console.log(state);
  const { products, cart } = state;
  console.log(cart);

  return (
    <Card className="products" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
          <span>{product.price.split(".")[0]} ₺</span>
          {product.fastDelivery ? (
            <div>FastDelivery</div>
          ) : (
            <div>4 days delivery</div>
          )}
          <Rating rating={product.ratings} />
        </Card.Subtitle>
        {cart.some((p) => p.id === product.id) ? (
          <Button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product })
            }
            variant="danger"
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            disabled={!product.inStock}
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            {!product.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        )}
        {/* <Button variant="danger">Remove From Cart</Button>
        <Button disabled={!product.inStock}>
          {!product.inStock ? "Out of Stock" : "Add to Cart"}
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default SingleProducts;
