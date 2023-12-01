import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const PaymentPage = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <CreditCardIcon style={{ fontSize: "50px", marginBottom: "20px" }} />
        <Typography variant="h5" gutterBottom>
          Payment Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Card Number" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Expiry Date" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="CVV" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Cardholder Name" variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Pay Now
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default PaymentPage;
