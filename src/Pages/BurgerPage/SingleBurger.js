import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from '@mui/icons-material/Delete';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
 
  
  Rating,
} from "@mui/material";
import { Box, styled } from "@mui/system";

import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";



const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "tomato",
  },
});

const SingleBurger = ({burger }) => {
    
    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(
                `http://localhost:5000/deleteBurger/${burger.id}`
              )
              .then((res) => {
                if (res.status === 200) {
                  Swal.fire("Deleted!", "Your Burger has been deleted.", "success");
                }
              });
          }
        });
      };

   
    return (
    <Card sx={{ maxWidth: 345, height: 480, borderRadius: "20px" }}>
      <CardActionArea sx={{ pt: 3 }}>
        <img src={burger?.img} height="200" width="100%" alt="Burger" />
      </CardActionArea>
      <CardContent>
        <Typography textAlign="left" gutterBottom variant="h6" component="div">
          {burger?.title}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight="bold"
            component="div"
          >
            BDT {burger?.price}
          </Typography>
          <StyledRating
            sx={{ ms: "auto" }}
            size="small"
            color="tomato"
            name="half-rating"
            defaultValue={burger?.rating}
            readOnly
          />
        </Box>
        <Divider />
        <Typography sx={{ pt: 2 }} variant="body2" color="text.secondary">
          {burger?.desc?.slice(0, 100)}...
        </Typography>
      </CardContent>

      <CardActions sx={{ my: 1 }}>
       
          {" "}
          <Link className={"root"} to={`/purchase/${burger?.id}`}>
            <Button
              variant="outlined"
              size="small"
              color="error"
              sx={{ color: "tomato" }}
            >
              Buy Now
            </Button>
                  </Link>
          <Link className={"root"} to={`/editBurger/${burger?.id}`}>
            <Button
              variant="outlined"
              size="small"
              color="error"
                            sx={{ color: "tomato" }}
                         
            >
               <CreditScoreIcon></CreditScoreIcon>Edit
            </Button>
                    </Link>
                   
                  
         <Button  variant="outlined"
              size="small"
                    color="error"
                onClick={handleDelete}><DeleteIcon></DeleteIcon>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default SingleBurger;
