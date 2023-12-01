import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ toggleDrawer }) => {
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
      <Typography style={{ fontWeight: "bold" }}>My Cart</Typography>
      <CloseIcon onClick={toggleDrawer} sx={{ cursor: "pointer" }} />
    </Box>
  );
};
export default Header;
