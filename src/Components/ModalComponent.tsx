import React from "react";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  history: string[];
}
const ModalComponent: React.FC<Props> = ({ open, handleClose, history }) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgColor: "transparent",
    border: "2px solid #000",
    // boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {history &&
            history.map((history: string, i: number) => (
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                key={i}
              >
                {history}
              </Typography>
            ))}
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
