import { Container,  Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Spinner from "../../Components/Spinner";
import SinglePizza from "../PizzaPage/SinglePizza";

const HomePizza = ({setOpen}) => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

    //load all pizza
  useEffect(() => {
    axios
      .get("http://localhost:5000/getPizza/")
      .then((res) => {
        console.log(res.data)
        setPizzas(res.data);
        setIsLoading(false);
      }).catch(err=>{console.log(err)});
    if (!pizzas) {
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
            <Typography color="tomato">   OUR SPECIAL MENU</Typography>
              <Typography fontWeight="bold" variant="h4">
                {" "}
                Fresh Pizza From Platos
              </Typography>
            </Box>
            <Container>
              <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                {pizzas?.slice(0,6)?.map((pizza) => (
                  <Grid key={pizza.id} item xs={4} sm={4} md={4}>
                    <SinglePizza setOpen={setOpen} pizza={pizza} />
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

export default HomePizza;
