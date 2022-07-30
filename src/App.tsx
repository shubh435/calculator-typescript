import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import Calculator from "./Components/Calculator";
import TextInput from "./Components/TextInput";

const App = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");
  return (
    <Box>
      <Container>
        <Box sx={{ margin: "20px auto" }}>
          <Typography align="center" variant="h3">
            Simple Calculator
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ccc",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <TextInput text={text} result={result} />
          <Calculator
            text={text}
            setText={setText}
            result={result}
            setResult={setResult}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
