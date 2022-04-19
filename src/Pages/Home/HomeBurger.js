import { Container,  Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Spinner from "../../Components/Spinner";
import SingleBurger from "../BurgerPage/SingleBurger";


const HomeBurger = ({setOpen}) => {
  const [burgers, setBurgers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

    //load all Burger
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
                {burgers?.slice(0,6)?.map((burger) => (
                  <Grid key={burger.id} item xs={4} sm={4} md={4}>
                    <SingleBurger setOpen={setOpen} burger={burger} />
                  </Grid>
                ))}
              </Grid>
            </Container>
            </Box>
            
        </Box>
      )}
    </Box>
  );
};

export default HomeBurger;
