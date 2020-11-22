import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles((theme) => {
  console.log("STYLE", theme);
});

const Navbar = () => {
  const classes = useStyle();

  return (
    <div>
      <AppBar
        position="static"
        style={{ flexFlow: 1 }}
        style={{ background: "#3370FF" }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>

          <Typography variant="h5">CricScore </Typography>

          <span style={{ flexGrow: 1 }}></span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
