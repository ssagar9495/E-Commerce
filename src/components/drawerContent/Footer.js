import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { getCartAmount } from "../../utils";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

const Footer = ({ isLoggedIn, productList }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px 10px",
        margin: "2px 2px",
        borderRadius: "2px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        style={{
          display: "flex",
          width: "100%",
          padding: "15px 10px",
          borderRadius: "10px",
          justifyContent: "space-between",
        }}
        color="success"
      >
        <div>
          <Typography style={{ fontWeight: "bold" }}>
            ₹{getCartAmount(productList)}
          </Typography>
          <Typography style={{ fontWeight: "bold" }}>TOTAL</Typography>
        </div>
        {isLoggedIn ? (
          <div style={{ fontWeight: "bold", marginRight: "10px" }}>Pay</div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
            }}
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Login to Proceed <NavigateNextIcon style={{ marginLeft: "10px" }} />
          </div>
        )}
      </Button>
    </Box>
  );
};

export default Footer;
