import React from "react";
import { Button, Form } from "react-bootstrap";

const Filter = () => {
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`ìnline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`ìnline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out Of Stock"
          name="group1"
          type="checkbox"
          id={`ìnline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`ìnline-4`}
        />
      </span>
      <span>
        {/* <label style={{ paddingRight: 10 }}>Rating</label>
        <Rating rating={byRating} style={{ cursor: "pointer" }} /> */}
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filter;
