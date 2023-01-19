import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography
            noWrap
            href="/"
            variant="h6"
            component="a"
            sx={{ flexGrow: 1 }}
          >
            さえずり
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
