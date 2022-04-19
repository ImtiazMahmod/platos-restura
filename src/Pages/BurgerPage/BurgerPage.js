import { Container,  Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import Spinner from "../../Components/Spinner";
import AddBurger from "./AddBurger";
import SingleBurger from "./SingleBurger";

const BurgerPage = () => {
  const [burgers, setBurgers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

    //load all burger
  useEffect(() => {
    axios
      .get("http://localhost:5000/getBurger/")
      .then((res) => {
        console.log(res.data)
        setBurgers(res.data);
        setIsLoading(false);
      }).catch(err=>{console.log(err)});
    if (!burgers) {
      return <Spinner />;
    }
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box>
            <Navigation />
            <AddBurger></AddBurger>
           
          <Box sx={{ minHeight: "100vh", my: 12 }}>
        
            <Box sx={{ my: 5 }}>
              <Typography color="tomato">Fresh Burger From Platos</Typography>
              <Typography fontWeight="bold" variant="h4">
                {" "}
                OUR SPECIAL MENU
              </Typography>
            </Box>
            <Container>
              <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                {burgers?.map((burger) => (
                  <Grid key={burger.id} item xs={4} sm={4} md={4}>
                    <SingleBurger  burger={burger} />
                  </Grid>
                ))}
              </Grid>
            </Container>
            </Box>            
        
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default BurgerPage;
