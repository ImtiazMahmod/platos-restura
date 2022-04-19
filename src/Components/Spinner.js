import { CircularProgress } from "@mui/material";


// Can be a string as well. Need to ensure each key-value pair ends with ;

function Spinner() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="sweet-loading"
    >
     <CircularProgress color="secondary" />
    </div>
  );
}

export default Spinner;
