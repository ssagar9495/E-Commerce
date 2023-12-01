import React from "react";
import { Button } from "@mui/material";

const AddButton = ({ product, setProductList }) => {
  const onAddClick = (product) => {
    setProductList((prevProducts) =>
      prevProducts.map((productValue) =>
        productValue.id === product.id
          ? {
              ...productValue,
              orderQuantity: Number(productValue.orderQuantity) + 1,
            }
          : productValue
      )
    );
  };
  const onQuantityClick = (action, product) => {
    if (action === "ADD") {
      setProductList((prevProducts) =>
        prevProducts.map((productValue) =>
          productValue.id === product.id
            ? {
                ...productValue,
                orderQuantity: Number(productValue.orderQuantity) + 1,
              }
            : productValue
        )
      );
    } else {
      setProductList((prevProducts) =>
        prevProducts.map((productValue) =>
          productValue.id === product.id
            ? {
                ...productValue,
                orderQuantity: Number(productValue.orderQuantity) - 1,
              }
            : productValue
        )
      );
    }
  };
  return (
    <Button
      variant={product.orderQuantity !== 0 ? "contained" : "outlined"}
      color="success"
      onClick={() => onAddClick(product)}
      style={{ fontWeight: "bold" }}
    >
      {product.orderQuantity !== 0 ? (
        <div>
          <button
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              color: "white",
              border: "none",
              fontWeight: "bold",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuantityClick("SUBTRACT", product);
            }}
          >
            -
          </button>
          {product?.orderQuantity}
          <button
            style={{
              backgroundColor: "transparent",
              marginLeft: "5px",
              color: "white",
              border: "none",
              fontWeight: "bold",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuantityClick("ADD", product);
            }}
          >
            +
          </button>
        </div>
      ) : (
        "ADD"
      )}
    </Button>
  );
};

export default AddButton;
