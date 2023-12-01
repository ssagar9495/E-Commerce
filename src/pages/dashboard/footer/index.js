import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f8f8", padding: "20px 0" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: "bold", padding: "20px 0px" }}
            >
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              “E-Commerce” is owned & managed by "E Commerce Private Limited"
              (formerly known as Grofers India Private Limited) and is not
              related, linked or interconnected in whatsoever manner or nature,
              to “GROFFR.COM” which is a real estate services business operated
              by “Redstone Consultancy Services Private Limited”.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: "end",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: "bold", padding: "20px 0px" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: Ecom@gmail.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: +9915944300
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ marginTop: "20px" }}
        >
          © 2023 E-Commerce Store. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
