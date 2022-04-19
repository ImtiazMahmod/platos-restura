import { Container, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import Spinner from "../../Components/Spinner";
import MuiButton from "../../Components/Styled/MuiButton";


const EditPizza = () => {

    const { pizzaId } = useParams()
    const [pizza, setPizza] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log("pizzaId",pizzaId)
    const { register, handleSubmit, reset } = useForm();
    console.log(pizza)
     //load a pizza
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getAPizza/${pizzaId}`)
      .then((res) => {
        // console.log(res.data)
        setPizza(res.data);
        setIsLoading(false);
      }).catch(err=>{console.log(err)});
    if (!pizza) {
      return <Spinner />;
    }
  }, [pizzaId]);
    
    const onSubmit = (data) => {

          ///update data to server
    axios
      .put(`http://localhost:5000/updatePizza/${pizzaId}`, data)
        .then((res) => {
          console.log(res.status)
        //pizza added
        if (res.status===200) {
          Swal.fire({
            title: "Pizza Updated",
            text: "Pizza updated to your store.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };

  return (
      <Box >
          <Navigation></Navigation>
          <Container>
           
      <Typography variant="h4" sx={{ my: 3 }} fontWeight="bold">
       Edit  Pizza
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
            required defaultValue={pizza.title}
                              label="Title"
                             
            sx={{ mt: 2, width: "75%" }}
                              variant="outlined"
                      
            {...register("title")}
          />

          <TextField
            required defaultValue={pizza.img} 
            label="Image URL"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            {...register("img")}
          />
          <TextField
            required defaultValue={pizza.price} 
            label="Pizza Price"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("price")}
          />

          <TextField
            required defaultValue={pizza.rating} 
            label="Rating"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("rating", { required: true, min: 0, max: 5 })}
          />

          <TextField
            required
            multiline
            rows={5} defaultValue={pizza.desc}
            label="Description"
            variant="outlined"
            sx={{ my: 2, width: "75%" }}
            {...register("desc")}
          />
        </Box>
        <MuiButton type="submit">Edit Pizza</MuiButton>
              </form></Box>
          </Container>
          <Footer></Footer>
    </Box>
  );
};

export default EditPizza;
