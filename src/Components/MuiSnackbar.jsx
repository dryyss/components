import React, { forwardRef, useState } from "react";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import Close from "@mui/icons-material/Close";

const SnackBarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="text" color="primary" onClick={() => setOpen(true)}>
        Submit
      </Button>
      {/* <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={4000}
        message="form submitted successfully"
        dateTime="11 mins ago"
        icon="notifications"
        onClose={handleClose}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <Close fontSize="small" />
          </IconButton>
        } */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        onClose={handleClose}
        message="for"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <Close fontSize="small" />
          </IconButton>
        }
      >
        <SnackBarAlert onClose={handleClose} severity="success" autoHideDuration={4000} open={open}>
          form submitted successfully
        </SnackBarAlert>
      </Snackbar>{" "}
    </>
  );
};

export default MuiSnackbar;
