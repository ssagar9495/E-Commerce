import React from "react";
import { Button, Typography } from "@mui/material";
import { APP_IMAGES } from "../../constants/assets";
import { getCartAmount } from "../../utils";

const CartButton = ({ toggleDrawer, productList }) => {
  return (
    <Button
      variant="contained"
      color="success"
      onClick={toggleDrawer}
      sx={{ padding: "15px 15px", borderRadius: "10px", maxHeight: "62px" }}
    >
      <img src={APP_IMAGES.CART} style={{ marginRight: "10px" }} />
      <Typography sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
        <div>My Cart</div>

        {getCartAmount(productList) !== 0 && (
          <div style={{ marginLeft: "5px" }}>₹{getCartAmount(productList)}</div>
        )}
      </Typography>
    </Button>
  );
};

export default CartButton;
