import React from "react";
import { Box, Typography } from "@mui/material";
import { CANCELLATION_PLOICY } from "../../constants/dummyData";

const Policy = () => {
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
      <Typography style={{ fontWeight: "bold" }}>
        Cancellation Policy
      </Typography>
      <div style={{ color: "gray", fontSize: "15px" }}>
        {CANCELLATION_PLOICY}
      </div>
    </Box>
  );
};

export default Policy;
