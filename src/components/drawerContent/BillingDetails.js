import React from "react";
import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { getCartAmount } from "../../utils";
import { DILIVERY_CHARGES } from "../../constants/dummyData";

const BillingDetails = ({ productList }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "10px 10px",
        margin: "10px 10px",
        borderRadius: "2px",
        borderRadius: "5px",
      }}
    >
      <Typography style={{ fontWeight: "bold" }}>Bill Details</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4px 0px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <DescriptionIcon style={{ marginRight: "5px" }} />
          <div> Item total</div>
        </div>
        <div>₹{getCartAmount(productList)}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4px 0px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <DeliveryDiningIcon style={{ marginRight: "5px" }} />
            Delivery charges
          </div>
        </div>
        <div>₹{DILIVERY_CHARGES}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4px 0px",
        }}
      >
        <div style={{ fontWeight: "bold" }}>Grand Total</div>
        <div style={{ fontWeight: "bold" }}>
          ₹{getCartAmount(productList) + DILIVERY_CHARGES}
        </div>
      </div>
    </Box>
  );
};

export default BillingDetails;
