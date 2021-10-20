import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/users.actions";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { BiLogOut, BiUser } from "react-icons/bi";

export default function MenuProfile({ user_login }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disabled
          className="justify-content-center"
        >
          {user_login["name"]}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BiUser size={24} />
          &nbsp;Profile
        </MenuItem>
        <MenuItem onClick={logoutHandler}>
          <BiLogOut size={24} />
          &nbsp;LogOut
        </MenuItem>
      </Menu>
    </div>
  );
}
