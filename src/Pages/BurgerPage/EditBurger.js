import { Container,  TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import MuiButton from "../../Components/Styled/MuiButton";
import { updateBurger } from "../../Redux/burgerSlice/burgerSlice";


const EditBurger = () => {

    const { burgerId } = useParams()
    const [burger, setBurger] = useState([]);
   
    console.log("burgerId",burgerId)
    const { register, handleSubmit, } = useForm();
  console.log(burger)
  
     //load a burger
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getABurger/${burgerId}`)
      .then((res) => {
        // console.log(res.data)
        setBurger(res.data);
        }).catch(err=>{console.log(err)});
    
  }, [burgerId]);
    
  const dispatch = useDispatch()
  
    const onSubmit = (data) => {

      dispatch(updateBurger(burgerId, data)).then(res => {
        console.log(res);
      })
     console.log("object");
  };

  return (
      <Box >
          <Navigation></Navigation>
          <Container>
           
      <Typography variant="h4" sx={{ my: 3 }} fontWeight="bold">
       Edit  Burger
      </Typography>
      <Box sx={{mb:5}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            required defaultValue={burger.title}
                              label="Title"
                             
            sx={{ mt: 2, width: "75%" }}
                              variant="outlined"
                      
            {...register("title")}
          />

          <TextField
            required defaultValue={burger.img} 
            label="Image URL"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            {...register("img")}
          />
          <TextField
            required defaultValue={burger.price} 
            label="Burger Price"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("price")}
          />

          <TextField
            required defaultValue={burger.rating} 
            label="Rating"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("rating", { required: true, min: 0, max: 5 })}
          />

          <TextField
            required
            multiline
            rows={5} defaultValue={burger.desc}
            label="Description"
            variant="outlined"
            sx={{ my: 2, width: "75%" }}
            {...register("desc")}
          />
        </Box>
        <MuiButton type="submit">Edit Burger</MuiButton>
              </form></Box>
          </Container>
          <Footer></Footer>
    </Box>
  );
};

export default EditBurger;
