import { Call, Email } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ py: 4, bgcolor: grey[900] }}>
      <Container>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid sx={{ textAlign: "left" }} xs={4} sm={4} md={3} item>
           <Link to="/"> <img width="150" src="https://media-cdn.tripadvisor.com/media/photo-s/15/90/5f/17/logo.jpg" alt="" /></Link>
            <Typography
              sx={{ color: grey[500], fontSize: 14, textAlign: "left" }}
            >
              Craving some delicious  food? Maybe you’re in the mood for a burger or pizza? No matter what kind of meal you have in mind, The Spot Restaurant is ready to prepare it for you.
            </Typography>
          </Grid>
          <Grid xs={4} sm={4} md={3} item textAlign="left">
            <Typography color="white">OUR SERVICES</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to="/pizza"><Typography variant="subtitle1" color="lightgrey">
                  Pizza
                  </Typography></Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                <Link to="/">  <Typography variant="subtitle1" color="lightgrey">
                    Restaurant
                  </Typography></Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                                  <Link to="/burger"><Typography variant="subtitle1" color="lightgrey">
                    Burger
                  </Typography>
                                  </Link>
                </ListItemButton>
              </ListItem>
             
            </List>
          </Grid>
          <Grid textAlign="center" xs={4} sm={4} md={3} item>
            <Typography textAlign="left" color="white">
              CONTACT
            </Typography>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <LocationOnIcon />{" "}
              <Typography sx={{ mx: 1 }}> Dhaka,Bangladesh</Typography>
            </Box>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <Call /> <Typography sx={{ mx: 1 }}> +880 188 888 888</Typography>
            </Box>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <Email />{" "}
              <Typography sx={{ mx: 1 }}> support@superbike.com</Typography>
            </Box>
          </Grid>
          <Grid xs={4} sm={4} md={3} item>
            <Typography textAlign="left" color="white">
              CONNECT
            </Typography>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
                justifyContent: "start",
              }}
            >
              {" "}
              <FacebookIcon sx={{ mx: 1 }} />
              <GoogleIcon sx={{ mx: 1 }} />
              <TwitterIcon sx={{ mx: 1 }} />
              <LinkedInIcon sx={{ mx: 1 }} />
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography sx={{ mt: 5 }} color="lightgrey">
            @copyright all right reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
