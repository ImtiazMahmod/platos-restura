import { Container, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import MuiButton from "../../Components/Styled/MuiButton";


const AddPizza = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    ///post data to server
    axios
      .post("http://localhost:5000/addPizza/", data)
        .then((res) => {
          console.log(res.status)
        //pizza added
        if (res.status===200) {
          Swal.fire({
            title: "Pizza Added",
            text: "Pizza added to your store.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };

  return (
      <Box sx={{ my: 3 }}>
          <Container>
           
      <Typography variant="h4"  fontWeight="bold">
        Add A Pizza
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
            required
            label="Title"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            {...register("title")}
          />

          <TextField
            required
            label="Image URL"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            {...register("img")}
          />
          <TextField
            required
            label="Pizza Price"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("price")}
          />

          <TextField
            required
            label="Rating"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("rating", { required: true, min: 0, max: 5 })}
          />

          <TextField
            required
            multiline
            rows={5}
            label="Description"
            variant="outlined"
            sx={{ my: 2, width: "75%" }}
            {...register("desc")}
          />
        </Box>
        <MuiButton type="submit">Add Pizza</MuiButton>
              </form></Box>
          <Divider></Divider></Container>
    </Box>
  );
};

export default AddPizza;
