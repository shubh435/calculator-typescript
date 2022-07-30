import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { FC, useState } from "react";
import Calculator from "./Components/Calculator";
import TextInput from "./Components/TextInput";

const App: FC = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  return (
    <Box>
      <Container>
        <Box sx={{ margin: "20px auto" }}>
          <Typography align="center" variant="h3">
            Simple Calculator
          </Typography>
        </Box>
        <Box
        // sx={{
        //   backgroundColor: "#f4689c",
        //   padding: "5%",
        //   borderRadius: "50%",
        //   width: "1200px",
        //   height: "auto",
        // }}
        >
          <Box
            sx={{
              backgroundColor: "#434343",
              borderRadius: "25px",
              border: ".5px solid #fff",
              width: "40%",
              margin: "20px auto",
            }}
          >
            <TextInput text={text} result={result} showResult={showResult} />
            <Calculator
              text={text}
              setText={setText}
              result={result}
              setResult={setResult}
              setShowResult={setShowResult}
              showResult={showResult}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
