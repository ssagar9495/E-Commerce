import React from "react";
import { AppBar, Box, Toolbar, Grid } from "@mui/material";
import SearchInput from "../searchInput";
import CartButton from "../cartButton";
import LoginButton from "../loginButton";
import UserProfile from "../userProfile";
import { APP_IMAGES } from "../../constants/assets";

const NavBar = ({ userData, toggleDrawer, productList, setSearch }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: "white",
            color: "gray",
            padding: "10px 20px",
          }}
        >
          <Grid
            container
            spacing={3}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} sm={2}>
              <img src={APP_IMAGES.LOGO} style={{ width: "70%" }} alt="e-com" />
            </Grid>

            <Grid item xs={12} sm={7}>
              <SearchInput setSearch={setSearch} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {!userData.isLoggedIn && <LoginButton />}
              <CartButton
                toggleDrawer={toggleDrawer}
                productList={productList}
              />

              {userData.isLoggedIn && <UserProfile userData={userData} />}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
