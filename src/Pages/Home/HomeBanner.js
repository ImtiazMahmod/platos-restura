import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


import { Link } from 'react-router-dom';

const HomeBanner = () => {
   
        var foods = [
            {
              img: "https://www.u-buy.ch/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFHVzFjRDFSTkwuX0FDX1NMMTUwMF8uanBn.jpg",
              title: "Best Deal",
              subtitle: "15% - 20% Off",
                description: "Stainless Steel Serveware Bowls Set - Serving Bowls for Cereal, Soup.",
            },          
          ];
        
        
        
         
          return (
            <Box>
            
                {foods.map((food, i) => (
                  <Grid
                    key={i}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      xs={4}
                      sm={4}
                      md={5}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 3,
                        mx: "auto",
                      }}
                    >
                      <Container>
                        <Box>
                          <Typography
                            sx={{ textAlign: "left", fontWeight: "bold" ,my:3}}
                            variant="h3"
                          >
                            {food.title}
                          </Typography>
                          <Typography sx={{ textAlign: "left" }} variant="h4">
                            {food.subtitle}
                          </Typography>
                                    <Typography sx={{ textAlign: "left", my:2 }} variant="h5">
                            {food.description}
                          </Typography>
                        </Box>
                        <Link style={{ textDecoration: "none" }} to="/explore">
                          {" "}
                          <Button
                            sx={{ display: "flex", color: "white", mt: 3 }}
                            color="warning"
                            variant="contained"
                            className="CheckButton"
                          >
                            Buy Now
                          </Button>
                        </Link>
                      </Container>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 3,
                      }}
                      xs={4}
                      sm={4}
                      md={6}
                      item
                    >
                      <Box
                        sx={{
                          p: 5,
                        }}
                      >
                        {" "}
                        <img style={{ width: "100%" }} src={food.img} alt="" />
                      </Box>
                    </Grid>
                  </Grid>
                ))}
             
            </Box>
    );
};

export default HomeBanner;