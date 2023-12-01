import React from "react";
import { Button } from "@mui/material";
import { ROUTES } from "../../router/routes";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      color="inherit"
      onClick={() => navigate(ROUTES.LOGIN)}
      style={{ margin: "0px 30px" }}
      sx={{
        padding: "20px 20px",
        borderRadius: "10px",
        fontWeight: "bold",
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
