import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import {
  Button,
  Divider,
  List,
  ListItem,
  SwipeableDrawer,
} from "@mui/material";
import { Link } from "react-router-dom";



///styled component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));


function Navigation() {


  const [state, setState] = React.useState(false);

  ///drawer toggler
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 
  ////mobile menu
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor ? "auto" : 200,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Search sx={{ display: { xs: "flex", md: "none" } }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <List>
        <ListItem button>
          <Link   to="/home">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              Home
            </Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link   to="/pizza">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              Pizza
            </Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link   to="/burger">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              Burger
            </Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link   to="/about">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              About Us
            </Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link   to="/contact">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              Contact Us
            </Typography>
          </Link>
        </ListItem>
        <Divider sx={{ my: 1 }} />
        
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "white", color: "black" }} position="static">
        <Toolbar>
          <Link
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img
              width="130"
              src="https://media-cdn.tripadvisor.com/media/photo-s/15/90/5f/17/logo.jpg"
              alt="logo"
            />
          </Link>

          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link   to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link   to="/pizza">
              <Button color="inherit">Pizza</Button>
            </Link>
            <Link   to="/burger">
              <Button color="inherit">Burger</Button>
            </Link>
            <Link   to="/about">
              <Button color="inherit">About Us</Button>
            </Link>
            <Link   to="/contact">
              <Button color="inherit">Contact Us</Button>
            </Link>
            
          </Box>

          {/* mobile menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
          </Box>
        </Toolbar>
      </AppBar>
     
    </Box>
  );
}
export default Navigation;
