import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            掲示板
          </Typography>
          <Button href="/thread/new" color="inherit">
            スレッドをたてる
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
