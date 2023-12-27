import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="text" color="primary" onClick={() => setOpen(true)}>
        {" "}
        Open Dialog{" "}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsam perspiciatis cum
            ratione esse et necessitatibus sed, laborum ea magni assumenda magnam fugit aut sint,
            aperiam labore obcaecati. Doloremque, ullam?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="text" color="primary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
