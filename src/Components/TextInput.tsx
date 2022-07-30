import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {
  text: string;
  result: string;
}

const TextInput = ({ text, result }: Props) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ display: "flex", alignItem: "center" }}>
        Result = {result ? <Typography variant="h4" >{result}</Typography> : " "}
      </Typography>
      <TextField
        sx={{ width: "90%", margin: "10px auto ", textAlign: "center" }}
        id="standard-basic"
        label="Enter the numbers"
        disabled
        variant="standard"
        value={text}
      />
    </Box>
  );
};

export default TextInput;
