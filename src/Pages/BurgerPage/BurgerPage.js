import { Container,  Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import Spinner from "../../Components/Spinner";
import { fetchBurgers } from "../../Redux/burgerSlice/burgerSlice";
import AddBurger from "./AddBurger";
import SingleBurger from "./SingleBurger";

const BurgerPage = () => {
 
  const [isLoading, setIsLoading] = useState(true);
  
// redux api call
  
  const dispatch = useDispatch()
  const burgers = useSelector((state) =>
   state.platosBurger.burgers
  
)

    ///load all burgers
    useEffect(() => {
      dispatch(fetchBurgers()).then((burgers) => {
        if (burgers) {
          setIsLoading(false);
               } else {
          setIsLoading(true);
        }
      });
    }, [burgers]);
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
              <Typography color="tomato">   OUR SPECIAL MENU</Typography>
              <Typography fontWeight="bold" variant="h4">
                {" "}
                Fresh Burger From Platos
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
