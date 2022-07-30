import { Button, Grid } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}
const Calculator = ({ text, setText, result, setResult }: Props) => {
  const operators: string[] = ["+", "-", "*", "/", "="];
  const renderButtons = () => {
    const numbers: number[] = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(i);
    }
    return numbers;
  };
  const numbers: number[] = renderButtons();

  const clear = () => {
    setText("");
    setResult("");
  };
  const handleArithmatic = (op: string) => {
    if (
      (operators.includes(op) && text === "") ||
      (operators.includes(op) && operators.includes(text.slice(-1)))
    ) {
      return;
    }

    setText(text.concat(op));

    if (!operators.includes(op)) {
      // eslint-disable-next-line no-eval
      setResult(eval(text + op).toString());
    }
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          margin: "20px auto",
          padding: "20px",
          borderRadius: "20px",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {operators.map((op: string, i: number) => (
          <Grid xs={4} key={i}>
            <Button
              variant="contained"
              sx={{ margin: "10px  auto", width: "80%" }}
              onClick={() => handleArithmatic(op)}
            >
              {op}
            </Button>
          </Grid>
        ))}
        <Grid xs={4}>
          <Button
            variant="contained"
            sx={{ margin: "10px  auto", width: "80%" }}
            onClick={clear}
          >
            c
          </Button>
        </Grid>
        {numbers.map((num: number) => (
          <Grid xs={4}>
            <Button
              variant="contained"
              sx={{ margin: "10px auto", width: "80%" }}
              key={num}
              onClick={() => handleArithmatic(String(num))}
            >
              {num}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Calculator;
