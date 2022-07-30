import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { FC, useState } from "react";
import Calculator from "./Components/Calculator";
import TextInput from "./Components/TextInput";

const App: FC = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [history, setHistory] = useState<string[]>(
    JSON.parse(`${localStorage.getItem("history")}`) || []
  );
  const styles = {
    padding: "2%",
    textAlign: "center",
    color: "#fff",
  };

  const clearHistory = () => {
    setHistory([]);
    setShowHistory(false);
    localStorage.clear();
  };
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
            {showHistory ? (
              <Box sx={styles}>
                <Box sx={{ minHeight: "50px" }}>
                  {history &&
                    history.map((history: string, i: number) => (
                      <Typography variant="h6" component="h2" key={i}>
                        {history}
                      </Typography>
                    ))}
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  onClick={clearHistory}
                >
                  clear history
                </Button>
              </Box>
            ) : (
              <>
                <TextInput
                  text={text}
                  result={result}
                  showResult={showResult}
                />
                <Calculator
                  text={text}
                  setText={setText}
                  result={result}
                  setResult={setResult}
                  setShowResult={setShowResult}
                  showResult={showResult}
                  setShowHistory={setShowHistory}
                  history={history}
                  setHistory={setHistory}
                />
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
