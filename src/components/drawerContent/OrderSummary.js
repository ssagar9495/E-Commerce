import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AddButton from "../addButton";

const OrderSummary = ({ orderedData, setProductList }) => {
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
      {orderedData.map((orderObj) => {
        return (
          <Grid
            container
            style={{
              margin: "10px 0px",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid lightgray",
              alignItems: "center",
            }}
          >
            <Grid xs={3} style={{ display: "flex", justifyContent: "start" }}>
              <img
                src={orderObj.productImage}
                height="100%"
                width="60%"
                style={{ borderRadius: "10px" }}
              />
            </Grid>
            <Grid
              xs={6}
              style={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <Typography style={{ display: "flex", justifyContent: "start" }}>
                {orderObj.productName}
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "start",
                  color: "gray",
                }}
              >
                {orderObj.quantity}
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "start",
                  fontWeight: "bold",
                }}
              >
                ₹{orderObj.price}
              </Typography>
            </Grid>
            <Grid xs={3} style={{ display: "flex", justifyContent: "end" }}>
              <AddButton product={orderObj} setProductList={setProductList} />
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default OrderSummary;
