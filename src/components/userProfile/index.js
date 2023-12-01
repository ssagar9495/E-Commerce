import React, { useState } from "react";
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { PROFILE_MENU } from "../../constants/dummyData";
import { handleLogout } from "../../redux/actions/auth";

const UserProfile = ({ userData }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onMenuClick = (event, key) => {
    if (key === "Logout") {
      dispatch(handleLogout(true));
    }
  };
  return (
    <Box
      sx={{
        flexGrow: 0,
        marginLeft: "50px",
        marginRight: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip title="Profile">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={userData?.firstName} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {PROFILE_MENU.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography
              textAlign="center"
              onClick={(e) => onMenuClick(e, setting)}
            >
              {setting}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserProfile;
