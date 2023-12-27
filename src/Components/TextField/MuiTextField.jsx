import React, { useState } from "react";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [typePassWord, setTypePassWord] = useState("password");
  const [value, setValue] = useState("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setTypePassWord(!typePassWord);
  };

  return (
    <Stack spacing={4} padding={5}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" color="secondary" size="small">
          Small Secondary
        </TextField>
      </Stack>
      <Stack direction="row" spacing={3}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "required" : "do not  share your password "}
        />
        <TextField
          label="Password"
          type={typePassWord ? "password" : "text"}
          helperText=" Do not share your Password "
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Read Only" read InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
        />
        <TextField
          label="Weight"
          InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
