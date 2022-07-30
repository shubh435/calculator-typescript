import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {
  text: string;
  result: string;
  showResult: boolean;
}

const TextInput = ({ text, result, showResult }: Props) => {
  return (
    <Box sx={{ width: "100%", margin: "10px auto ", textAlign: "center" }}>
      <TextField
        sx={{
          width: "70%",
          margin: "5px auto ",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
        id="standard-basic"
        label="Enter the numbers"
        disabled
        variant="filled"
        color="error"
        value={text}
      />
      <Typography
        align="center"
        variant="h4"
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          height: "30px",
        }}
      >
        {result && showResult ? (
          <Typography variant="h6">op={result}</Typography>
        ) : (
          " "
        )}
      </Typography>
    </Box>
  );
};

export default TextInput;
