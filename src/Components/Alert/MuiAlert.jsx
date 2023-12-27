import { Alert, AlertTitle, Stack, Button } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const AlertComponent = ({ severity, variant = null, message = null, ...restMuiProps }) => {
  const [defaultMessage, setDefaultMessage] = useState({
    error: "This is an error alert ",
    warning: "This is an warning alert ",
    info: "This is an info alert ",
    success: "This is an success alert ",
  });

  // const payload = {
  //   email: "dd@test.st",
  //   createdAt: new Date(),
  //   deletedAt: new Date()
  // };
  // const { deletedAt, ...restPayload } = payload;

  // fetch("url", { payload: restPayload })

  const isVariantTrue = variant ? { variant } : undefined;

  // useEffect(() => {
  //   if (variant === "filled") {
  //     // setDefaultMessage({ ...defaultMessage, error: "bonjour" })
  //     setDefaultMessage((prevState) => ({ ...prevState, error: "bonjour" }))
  //   }
  // }, [variant])

  return (
    <Alert severity={severity} {...isVariantTrue} {...restMuiProps}>
      {message ?? defaultMessage[severity]}
    </Alert>
  );
};

const MuiAlert = (error) => {
  return (
    <Stack spacing={2}>
      <AlertComponent
        severity="error"
        message="bonjour"
        // variant="outlined"
        onClose={() => alert("cool")}
        icon={<CheckIcon fontSize="inherit" />}
      />
      <AlertComponent severity="info" action={<Button color="inherit">undo</Button>} />
      <AlertComponent severity="warning" />
      <AlertComponent severity="success" />
    </Stack>
  );
};

export default MuiAlert;
