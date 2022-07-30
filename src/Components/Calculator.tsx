import { Button, Grid } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  showResult: boolean;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
}
const Calculator: React.FC<Props> = ({
  text,
  setText,
  result,
  setResult,
  setShowResult,
  showResult,
  setShowHistory,
  setHistory,
  history,
}) => {
  // const [history, setHistory] = useState<string[]>(
  //   JSON.parse(`${localStorage.getItem("history")}`) || []
  // );
  const operators: string[] = ["+", "-", "*", "/", "=", "."];
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
    setShowResult(false);
  };
  const handleArithmatic = (op: string) => {
    if (
      (operators.includes(op) && text === "") ||
      (operators.includes(op) && operators.includes(text.slice(-1)))
    ) {
      return;
    }
    if (op === "=") {
      setShowResult(true);
      takeHistory();
    } else {
      setText(text.concat(op));
      if (!operators.includes(op)) {
        // eslint-disable-next-line no-eval
        setResult(eval(text + op).toString());
      }
    }
  };
  const takeHistory = () => {
    // handleOpen();
    if (text || result) {
      setHistory([...history, `${text} = ${result} `]);
      localStorage.setItem(
        "history",
        JSON.stringify([...history, `${text} = ${result} `])
      );
    }
  };

  return (
    <>
      <Grid
        container
        sm
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          margin: "5px auto",
          padding: "20px",
          borderRadius: "20px",
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid xs={4}>
          <Button
            variant="contained"
            sx={{ margin: "10px  auto", width: "80%" }}
            onClick={clear}
            color="error"
          >
            c
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button
            variant="contained"
            sx={{ margin: "10px  auto", width: "80%" }}
            onClick={() => {
              setShowHistory(true);
              // takeHistory();
            }}
            color="success"
          >
            H
          </Button>
        </Grid>
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
