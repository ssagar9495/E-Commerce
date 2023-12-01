import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { APP_IMAGES } from "../../constants/assets";

const NoOrderYet = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "40px 10px",
        margin: "10px 10px",
        borderRadius: "2px",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      <img
        src={APP_IMAGES.EMPTY_CART}
        style={{ height: "50%", width: "50%" }}
      />

      <Typography style={{ fontWeight: "bold" }} variant="h6">
        You don't have any items in your cart
      </Typography>
      <Typography style={{ color: "gray" }}>
        You don't have any items in your cart
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: "10px", textTransform: "capitalize" }}
        onClick={toggleDrawer}
      >
        Start Shopping
      </Button>
    </Box>
  );
};

export default NoOrderYet;
